var koa = require('koa');
var app = koa();
var PORT = 3000

var KoaRender = require('koa-render')
app.use(KoaRender('./views', 'jade'))

app.use(function *(next){
  console.log("\n\n\n\n\n\n")
  console.log("1A")
  yield next
  console.log("1B")
});

app.use(function *(next){
  console.log("2A")
  yield next
  console.log("2B")
});

app.use(function *(next){
  console.log("3A")
  yield next
  console.log("3B")
});

app.use(function *(next){
  console.log("4A")
  // jade/html
  this.body = yield this.render('index');
  yield next
  console.log("4B")
});

app.listen(PORT);
console.log("listening at",PORT)