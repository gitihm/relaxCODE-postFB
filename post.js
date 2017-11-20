var https = require('https');
var fs = require('fs');
var FormData = require('form-data');

var TOKEN ="+here+";

var form = new FormData();

form.append('file', fs.createReadStream('+pic+'));
form.append('message',"+text+");

var options = {
    method: 'post',
    host: 'graph.facebook.com',
    path: '/me/photos?access_token='+TOKEN,
    headers: form.getHeaders(),
}

var request = https.request(options, function (res){
     console.log(res);
});

form.pipe(request);
