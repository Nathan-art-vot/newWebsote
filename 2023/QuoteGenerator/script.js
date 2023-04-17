var quotes=['hello 1', 'hello', 'quotes3'];

function generate(){
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteSection').innerHTML=quotes[random];
}

function seeAllQuotes(){
    text = '<ul>';
    for (i=0; i<quotes.length; i++){
        text += '<li>' + quotes[i] + '</li>';
    }
    text+= '</ul>';
    document.getElementById('quoteSection').innerHTML = text;
}

function newQuotes(){
    var newQuotes = document.getElementById('insertSection').value;
    alert('quotes added');
    quotes.push(newQuotes);
    seeAllQuotes();
}