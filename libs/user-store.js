"use strict"

var querystring = require('querystring');
var request = require('request');
var config = require("../libs/config.js");

var activeUsers = [];
var userDetails = new Map();
var exportV = {userDetails : userDetails};
const discourseURL = config.discourseRoot; //http://www.chuangxue.org/admin/users/list/active
const apiKey = config.discourseApiKey;
const apiUsername = config.discourseApiUsername;

function getDiscourseData(url, parameters, callback) {

    var getUrl = discourseURL + url +
        '?api_key=' + apiKey +
        '&api_username=' + apiUsername +
        '&' + querystring.stringify(parameters);

    request.get({
            url: getUrl,
            forever: true,
            timeout: 5000,
            agentOptions: {maxSockets : 6}
        },
        function(error, response, body) {

            if (error) {
                callback(error, {}, 500);
            }
            else if (!error && !!body.status && body.status !== 'OK'){
                error = new Error(body.description || body.error_message);
            }

            callback(error, body || {}, response != null ? response.statusCode : null);
            console.log(getUrl);
            console.log(body);
        }
    );
}

function getSingleUserInfo(username, callback) {
    // http://www.chuangxue.org/users/jade.json
    getDiscourseData('/users/' + username + '.json',
        {},
        function (error, body, httpCode) {

            if (error) return callback(error, null);

            try {
                var json = JSON.parse(body);
                if (json.user.id) return callback(null, json);
                else return callback(null, null);
            }
            catch (err) {
                return callback(err, null);
            }

        }
    );
}

function getActiveUsers(callback) {
    // http://www.chuangxue.org/admin/users/list/active.json
    getDiscourseData('/admin/users/list/active.json',
        {},
        function (error, body, httpCode) {

            if (error) return callback(error, null);

            try {
                var json = JSON.parse(body);
                if (json && json.length > 0) {
                    // do a lot of things here
                    json.forEach(function(oneUser){
                        var username = oneUser['username'];
                        getSingleUserInfo(username, function(err, userDetail){
                            if (err) {
                                console.error(err);
                                return;
                            }
                            if(userDetail.user.id == -1) {
                                return;
                            }
                            let userJson = {};
                            userDetails.set(username, userJson);
                            userJson.id = userDetail.user.id;
                            userJson.name = userDetail.user.name || userDetail.user.username;
                            userJson.avatar_template = userDetail.user.avatar_template;
                            if (userDetail.user.card_background) {
                                userJson.card_background = userDetail.user.card_background;
                            }
                            if (userDetail.user.bio_raw) {
                                userJson.bio = userDetail.user.bio_raw;
                            } else {
                                userJson.bio = "I'm not saying a bit about myself, because I'm cool.";
                            }
                            if (userDetail.user.website) {
                                let website = userDetail.user.website;
                                let re = /http(s?):\/\/\S+/;
                                if(re.test(website)) {
                                    userJson.website = userDetail.user.website;
                                }
                            }
                            //userJson.email = userDetail.user.email;
                            // badges
                            if (userDetail.badges) {
                                let badges = [];
                                userDetail.badges.forEach(function(oneBadge) {
                                    if(oneBadge.enabled !== true) {
                                        return;
                                    }
                                    badges.push({
                                        id: oneBadge.id,
                                        name: oneBadge.name,
                                        description: oneBadge.description,
                                        icon: oneBadge.icon,
                                        type: oneBadge.badge_type_id
                                    })
                                });
                                userJson.badges = badges;
                            }
                            if (userDetail.user.user_fields) {
                                let uf = userDetail.user.user_fields;
                                if(uf['1']) {
                                    userJson.linkedin = uf['1'];
                                }
                                if(uf['2']) {
                                    userJson.weibo = uf['2'];
                                }
                                if(uf['3']) {
                                    userJson.wechat = uf['3'];
                                }
                                if(uf['4']) {
                                    userJson.email = uf['4'];
                                }
                            }
                            console.info("set user info: " + username);
                            //console.info(userDetail);
                        });
                    });

                    return callback(null, json);
                }
                else return callback(null, null);
            }
            catch (err) {
                console.error("something happened");
                return callback(err, null);
            }

        }
    );
}

getSingleUserInfo("jade", function(err, json){
    //console.log(json);
});
console.log("-----------------");
getActiveUsers(function(err, json){
});
setInterval(function(){
    getActiveUsers(function(err, json){});
}, config.refreshDataInterval);

module.exports = exportV;