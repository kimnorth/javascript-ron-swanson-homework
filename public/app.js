var app = function(){

  var ronQuotes = new RonQuotes('http://ron-swanson-quotes.herokuapp.com/v2/quotes');

  ronQuotes.getData(function(){
    console.log(ronQuotes);
  });

}

window.onload = app;