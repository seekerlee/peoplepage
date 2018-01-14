var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./user.json', 'utf8'));

function has100bage(badges) {
    if(!badges) return false
    return !!badges.find(function(b) {
        return b.id === 100;
    })
}

Object.keys(obj).forEach(function(key) {
    if (!has100bage(obj[key].badges)) {
        //console.log('delete: ', key, obj[key]);
        delete obj[key]
    }
})

fs.writeFile("D:\\dev\\tedxsuzhou.com\\user2.json", JSON.stringify(obj, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
}); 
