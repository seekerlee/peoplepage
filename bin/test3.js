var fs = require('fs');
var request = require('request');

var obj = JSON.parse(fs.readFileSync('./user2.json', 'utf8'));

Object.keys(obj).forEach(function(key) {
    var tpl = obj[key].avatar_template
    if (tpl) {
        //console.log('delete: ', key, obj[key]);
        var url = '/images/avatar/' + key + '.png'
        obj[key].avatar_template = url
    } else {
        console.error('no avatar')
    }
})
fs.writeFile("D:\\dev\\tedxsuzhou.com\\user3.json", JSON.stringify(obj, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
}); 
