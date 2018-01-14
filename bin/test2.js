var fs = require('fs');
var request = require('request');

var obj = JSON.parse(fs.readFileSync('./user2.json', 'utf8'));

Object.keys(obj).forEach(function(key) {
    var tpl = obj[key].avatar_template
    if (tpl) {
        //console.log('delete: ', key, obj[key]);
        var url = 'http://chuangxue.org/' + tpl.replace('{size}','512')
        request
            .get(url)
            .on('error', function(err) {
                console.log(err)
                console.log('err: ' + url)
            })
            .pipe(fs.createWriteStream(key + '.png'))
    } else {
        console.error('no avatar')
    }
})
