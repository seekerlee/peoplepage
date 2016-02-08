
var querystring = require('querystring');
var request = require('request');

var activeUsers = [];
var exportV = {activeUsers : activeUsers};
const discourseURL = "http://www.chuangxue.org"; //http://www.chuangxue.org/admin/users/list/active
const apiKey = "ca70057f73c5f9635a731cfd98878b9a4b8b7a8665248b11f28a3a81caf234c2";
const apiUsername = "Seeker";

function getDiscourseData(url, parameters, callback) {

    var getUrl = discourseURL + url +
        '?api_key=' + apiKey +
        '&api_username=' + apiUsername +
        '&' + querystring.stringify(parameters);

    request.get({
            url: getUrl
        },
        function(error, response, body) {

            if (error) {
                callback(error, {}, 500);
            }
            else if (!error && !!body.status && body.status !== 'OK'){
                error = new Error(body.description || body.error_message);
            }

            callback(error, body || {}, response != null ? response.statusCode : null);

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
                if (json) return callback(null, json);
                else return callback(null, null);
            }
            catch (err) {
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
    console.log("got json json.size(): " + json.length);

    exportV.activeUsers = json;
});
setInterval(function(){
    getActiveUsers(function(err, json){
        console.log("got json json.size(): " + json.length);
        exportV.activeUsers = json;
    });
}, 30 * 1000);

module.exports = exportV;