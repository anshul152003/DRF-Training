const inputBox = document.getElementById("box");
// console.log(inputBox);
const mybtn = document.getElementById("btn");
// console.log(mybtn);
const list = document.getElementById("container");
// console.log(list);


function add(){
    let para = document.createElement("p");
    para.innerText = inputBox.value;
    list.appendChild(para);
    inputBox.value = "";

    let updateButton = document.createElement("button");
    updateButton.textContent = "update";
    list.appendChild(updateButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    list.appendChild(deleteButton);

    updateButton.addEventListener("click", () => {
        if (updateButton.textContent === "update") {
            inputBox.value = para.innerText;
            updateButton.textContent = "save";
        } else {
            para.innerText = inputBox.value;
            inputBox.value = "";
            updateButton.textContent = "update";
        }
    });
    deleteButton.addEventListener("click", () => {
        list.removeChild(para);
        list.removeChild(updateButton);
        list.removeChild(deleteButton);
    });
}



mybtn.addEventListener("click", () => {
    add();
})