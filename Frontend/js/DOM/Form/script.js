const form = document.getElementById("userForm");
const formSection = document.getElementById("form");
const cardSection = document.getElementById("card");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    document.getElementById("cardFname").textContent = fname;
    document.getElementById("cardLname").textContent = lname;
    document.getElementById("cardEmail").textContent = email;
    document.getElementById("cardCourse").textContent = course;

    formSection.style.display = "none";
    cardSection.style.display = "block";
});

function showForm() {
    form.reset();
    formSection.style.display = "block";
    cardSection.style.display = "none";
}