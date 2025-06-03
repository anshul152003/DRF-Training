//Asynchronous Programming:

//closure : 

//XHR :
const ans = new XHR();
ans.responseType = "json";
ans.open("GET", "https://jsonplaceholder.typicode.com/posts");
ans.send();
console.log(ans);

//Dynamic Function Creation:
function CA(me, URL) {
    const ans = new XHR();
    ans.responseType = "json";
    ans.open(me,URL);
    ans.send();
    console.log(ans);
}

//callback Hell :
