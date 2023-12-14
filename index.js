const btnEl=document.getElementById("btn");
const quoteEl=document.getElementById("quote");
const authorEl=document.getElementById("author");


async function getQuotes(){
    try{
        btnEl.innerText="Loading .......";//Works in case of netwok issue//
        btnEl.disabled=true;
        quoteEl.innerText="Updating!!!!"
        authorEl.innerText="Wait for a moment, just an update"

    const response=await fetch("https://api.quotable.io/random")//fetching api//
    const data=await response.json();//storing fetched information to variable data//

    const quoteContent=data.content;//storing quote to a variable from data//
    const quoteAuthor=data.author;//storing author name to a varible from data//

    quoteEl.innerText=quoteContent;//displaying the quote//
    authorEl.innerText="~" + quoteAuthor;//displaying the author//

    btnEl.innerText="Get a Quote";//works after the network issue//
    btnEl.disabled=false;
   

}catch(error)
{
    console.log("error occured!!!");
}

}
getQuotes()
btnEl.addEventListener("click",getQuotes)//function to work while clicking on the button//
