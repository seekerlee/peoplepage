const express = require('express');
const crypto = require('crypto');
const url = require('url');
const uuid = require('node-uuid');
const config = require("../libs/config.js");

const userStore = require('../libs/user-store');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  //res.render('login');
  /*
   Implement SSO in your web app:
   1) Generate a random nonce. Save it temporarily so that you can verify it with returned nonce value

   Create a new payload with nonce and return url (where the Discourse will redirect user after verification). Payload should look like: nonce=NONCE&return_sso_url=RETURN_URL

   Base64 encode the above raw payload. Let's call this payload as BASE64_PAYLOAD

   URL encode the above BASE64_PAYLOAD. Let's call this payload as URL_ENCODED_PAYLOAD

   Generate a HMAC-SHA256 signature from BASE64_PAYLOAD using your sso_secret as the key, then create a hex string from this. Let's call this signature as HEX_SIGNATURE

   Send auth request to Discourse
   Redirect the user to DISCOURSE_ROOT_URL/session/sso_provider?sso=URL_ENCODED_PAYLOAD&sig=HEX_SIGNATURE
  */
  const nonce = uuid.v4();
  req.session.nonce = nonce;
  const returnUrl = config.returnUrl;
  const payload = 'nonce=' + nonce + '&return_sso_url=' + returnUrl;
  const base64Payload = (new Buffer(payload).toString('base64'));
  const urlEncodedPayload = encodeURIComponent(base64Payload);
  const secret = config.discourseSecret;
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(base64Payload);
  const hexSignature = hmac.digest('hex');
  res.redirect(config.discourseRoot + '/session/sso_provider?sso=' + urlEncodedPayload + '&sig=' + hexSignature)
});

router.get('/loginsuccess', function(req, res, next) {
  const sso = req.query['sso'];
  const sig = req.query['sig'];
  const secret = config.discourseSecret;
  const hmac = crypto.createHmac('sha256', secret);
  hmac.update(sso);
  const hexSignature = hmac.digest('hex');
  if(hexSignature != sig) {
    console.log('signature validate fails!');
    res.send('error: signature validate fails!');
    return;
  }

  const params = new Buffer(sso, 'base64').toString("utf-8");
  const userQuery = url.parse("?" + params, true).query;
  /*
    {
      nonce: '101',
      name: '',
      username: 'Seeker',
      email: 'lishi1608@gmail.com',
      external_id: '1',
      return_sso_url: 'http://localhost:3000',
      admin: 'true',
      moderator: 'false'
    }
  */
  if(req.session.nonce != userQuery.nonce) {
    console.log('nonce validate fails!');
    res.send('error: nonce validate fails!');
    return;
  }

  //
  req.session.nonce = null; //nonce should be one off
  req.session.username = userQuery.username;
  res.redirect("/userpage");
});

router.get('/people', function(req, res, next) {
  // 1. get my info from
  //    http://www.chuangxue.org/users/jade.json

  // 2. get active user info from
  //    http://www.chuangxue.org/admin/users/list/active.json?api_key=ca70057f73c5f9635a731cfd98878b9a4b8b7a8665248b11f28a3a81caf234c2&api_username=seeker

  res.render('people', { userDetails: userStore.userDetails, rootUrl : config.discourseRoot });

});

module.exports = router;
