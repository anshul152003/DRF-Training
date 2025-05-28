const cooler={
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
