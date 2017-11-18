var https = require('https');
var fs = require('fs');
var FormData = require('form-data');

var TOKEN = "";

var form = new FormData();
form.append('message',"");

var options = {
    method: 'post',
    host: 'graph.facebook.com',
    path: '/me/photos?access_token='+TOKEN,
    headers: form.getHeaders(),
}
