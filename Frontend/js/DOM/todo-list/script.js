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
        const saveButton = document.createElement("button");
        saveButton.textContent = "save";
        inputBox.value = para.innerText;
        list.appendChild(saveButton);
        list.removeChild(updateButton);

        saveButton.addEventListener("click", () => {
            para.innerText = inputBox.value;
            inputBox.value = "";
            list.removeChild(saveButton);
            list.appendChild(updateButton);
        });
    });

    deleteButton.addEventListener("click", () => {
        list.removeChild(para);
        list.removeChild(updateButton);
        list.removeChild(deleteButton);
    });
}

mybtn.addEventListener("click", () => {
    if(inputBox.value === "") {
        alert("Please enter a task");
        return;
    }
    else{
        add();
    }
})