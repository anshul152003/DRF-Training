const form = document.getElementById("form");
const card = document.getElementById("card");
const formSection = document.getElementById("container");

const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");

const cardFirst = document.getElementById("cardFirstName");
const cardLast = document.getElementById("cardLastName");
const cardEmail = document.getElementById("cardEmail");
const cardCourse = document.getElementById("cardCourse");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    cardFirst.innerText = fnameInput.value;
    cardLast.innerText = lnameInput.value;
    cardEmail.innerText = emailInput.value;
    cardCourse.innerText = courseInput.value;

    form.style.display = "none";
    card.style.display = "block";
});

function showform() {
    form.reset();
    formSection.style.display = "block";
    card.style.display = "none";
}
