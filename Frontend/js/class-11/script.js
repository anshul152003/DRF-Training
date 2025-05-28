/*const cooler={
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
// const dublicate=JSON.parse(JSON.stringify(cooler)); // deep copy
dublicate.name="dublicate cooler";
console.log("original: ",cooler);
console.log("dublicate" ,dublicate);

dublicate.functionality.color="black";
cooler.brand="voltas";
console.log("after update original: ",cooler);
console.log("after update dublicate: ",dublicate); 

*/

//shallow copy pass by address
const cooler1={
    name: "blu",
    id: "DE223",
    functionality: {
        kaam: "cooling",
        color: "white"
    },
    height: 3.5
};

// const cooler2 = cooler1; // shallow copy
// const cooler2 = Object.assign({}, cooler1); 
const cooler2 = {...cooler1 }; // spread operator shallow copy
cooler2.id = "5555"; 
cooler2.name = "dublicate cooler";
cooler2.functionality.color = "green";

console.log("cooler1: ", cooler1);
console.log("cooler2: ", cooler2);