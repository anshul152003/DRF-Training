console.log("me hu sync code");
setTimeout(() => {
    console.log("me hu async code");
}, 2000);

console.log("me hu sync code 2");
setInterval(() => {
    console.log("me hu async code 2");
}, 1000);

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
