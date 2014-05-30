var koa = require('koa');
var app = koa();
var PORT = 3000

app.use(function *(){
  this.body = 'Hello World --'+app.env;
});

app.listen(PORT);
console.log("listening at",PORT)