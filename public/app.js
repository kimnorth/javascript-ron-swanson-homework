var app = function(){

  var ronQuotes = new RonQuotes('http://ron-swanson-quotes.herokuapp.com/v2/quotes');

  ronQuotes.getData(function(quoteArray){
    console.log(ronQuotes);
    console.log(quoteArray);
    var quote = quoteArray[0];

    var pTag = document.querySelector('#generated-text');
    pTag.innerText = quote.toUpperCase();
  });

}

window.onload = app;