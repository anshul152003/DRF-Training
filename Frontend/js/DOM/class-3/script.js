const myDiv = document.getElementById("onlyDiv");
console.log(myDiv);

console.log(myDiv.attributes);

for(let i = 0; i < myDiv.attributes.length; i++) {
    console.log(myDiv.attributes[i].name + " = " + myDiv.attributes[i].value);
}

//if you want to change an attribute
myDiv.attributes[0].value = "New Value";
for(let i = 0; i < myDiv.attributes.length; i++) {
    console.log(myDiv.attributes[i]);
}

//if you want to add new attribute
myDiv.setAttribute("data-custom", "Custom Value");
console.log(myDiv.getAttribute("data-custom"));

//if you want to remove an attribute
myDiv.removeAttribute("data-custom");
console.log(myDiv.getAttribute("data-custom")); // should be null now


// myDiv.setAttribute("style", "background-color: red; color: white;");
myDiv.style.backgroundColor = "blue"; // This will override the inline style
myDiv.style.fontSize = "20px";
myDiv.style.color = "aqua"; 