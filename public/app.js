var app = function(){

  var ronQuotes = new RonQuotes('http://ron-swanson-quotes.herokuapp.com/v2/quotes/60');
  var button = document.querySelector('#new-quote');

  ronQuotes.getData(function(){
    var quote = ronQuotes.returnQuote();
    var pTag = document.querySelector('#generated-text');
    pTag.innerText = quote.toUpperCase();
  });

  button.addEventListener('click', function(){
    ronQuotes.increaseIndex();
    var quote = ronQuotes.returnQuote();
    var pTag = document.querySelector('#generated-text');
    pTag.innerText = quote.toUpperCase();
  })

}

window.onload = app;