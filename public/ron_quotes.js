var RonQuotes = function(url){
  this.url = url;
  this.quotes = [];
  this.index = 0;
}

RonQuotes.prototype = {

  getData: function(callback){
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(request.status === 200){
        var jsonString = request.responseText;
        this.quotes = JSON.parse(jsonString);
        callback(this.quotes);
      }
    }.bind(this);
    request.send();
  },

  increaseIndex: function(){
    if (this.index < this.quotes.length - 1){
      this.index++;
    }
    else if (this.index === this.quotes.length - 1){
      this.index = 0;
      }
    else {
      this.index = 0;
    }
  },

  returnQuote: function(){
    return this.quotes[this.index];
  }

}