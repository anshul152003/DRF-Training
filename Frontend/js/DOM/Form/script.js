const form = document.getElementById("form");
const element = form.elements;
const display = document.getElementById("display");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayData();
    form.reset();
});

function displayData() {
    const div = document.createElement("div");
    const div1 = document.createElement("div");

    const fname = document.createElement("div");
    fname.innerHTML = "FIRST-NAME: " + element[0].value;

    const lname = document.createElement("div");
    lname.innerHTML = "LAST-NAME: " + element[1].value;

    const gender = document.createElement("div");
    if (element[2].checked) gender.innerHTML = "Gender: Male";
    else if (element[3].checked) gender.innerHTML = "Gender: Female";

    const email = document.createElement("div");
    email.innerHTML = "EMAIL: " + element[4].value;

    const skills = document.createElement("div");
    let skillArr = [];
    if (element[5].checked) skillArr.push("HTML");
    if (element[6].checked) skillArr.push("CSS");
    if (element[7].checked) skillArr.push("JS");
    skills.innerHTML = "SKILLS: " + skillArr.join(", ");

    div1.append(fname, lname, gender, email, skills);
    div.appendChild(div1);
    display.appendChild(div);

    div1.classList.add("div1");
    display.classList.add("display");
}
