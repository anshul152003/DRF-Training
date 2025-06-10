const container = document.getElementById('card-container');

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json()).then(data => {
        // console.log(data);
        let div = document.createElement("div");

        let name = document.createElement("h2");
        name.innerText = "Name: " + data.name;
        div.appendChild(name);

        let username = document.createElement("p");
        username.innerText = "Username: " + data.username;
        div.appendChild(username);

        let email = document.createElement("p");
        email.innerText = "Email: " + data.email;
        div.appendChild(email);

        let city = document.createElement("p");
        city.innerText = "City: " + data.address.city;
        div.appendChild(city);

        let company = document.createElement("p");
        company.innerText = "Company: " + data.company.name;
        div.appendChild(company);

        let website = document.createElement("p");
        website.innerText = "Website: " + data.website;
        div.appendChild(website);

        container.appendChild(div);
    });