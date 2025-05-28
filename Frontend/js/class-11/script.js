/* const cooler={
    name: "Cooler",
    id:"D223",
    functionality:{
        kaam: "cooling",
        color:"white  "  
    },
    height:3.5

};
// const dublicate=cooler;
const dublicate=Object.assign({},cooler); // shallow copy
dublicate.name="dublicate cooler";
console.log("original: ",cooler);
console.log("dublicate" ,dublicate);
dublicate.functionality.color="black";
cooler.brand="voltas";
console.log("after update original: ",cooler);
console.log("after update dublicate: ",dublicate); */

const cooler1={
    name: "bluecooler",
    id:"D223QSW",
    functionality:{
        kaam: "cooling",
        color:"white  "  
    },
    height:3.5
};

const dublicate1=JSON.parse(JSON.stringify(cooler1)); // deep copy
dublicate1.id = "1011";

console.log("original: ",cooler1);
console.log("dublicate1" ,dublicate1);