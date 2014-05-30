var koa = require('koa');
var app = koa();
var PORT = 3000
var request = require('co-request')

app.use(function *(){
  var pages = {
    google: request({uri:"http://google.com"}),
    axiomZen: request({uri:"http://axiomzen.co"})
  }
  this.body = yield pages
});


app.listen(PORT);
console.log("listening at",PORT)