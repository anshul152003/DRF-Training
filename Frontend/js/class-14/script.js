//API : 
// https://jsonplaceholder.typicode.com/users

// currying 
function doThreeSumByNormal(a, b, c) {
    return a + b + c;
};

function doThreeSumByCurrying(x) {
    console.log("firstvalue: ", x);
    return function One(y) {
        console.log("secondvalue: ", y);
        return function Two(z) {
            console.log("thirdvalue: ", z);
            return x + y + z;
        };
    };
};

console.log(doThreeSumByNormal(1, 2, 3)); // 6
console.log(doThreeSumByCurrying(1)(2)(3)); // 6