fetch((url = "json/places.json"))
    .then((data) => data.json())
    .then((places) => {
        const randomNum = Math.floor(Math.random() * places.length);
        const placeRandom = places[randomNum];

        function randomizer() {
            let random = places[Math.floor(Math.random() * places.length)];
            nam.innerText = `${random.name}`;
            city.innerText = random.city;
            tourcost.innerText = random.tourcost;
            nam.className = "nam";
            city.className = "city";
            tourcost.className = "tourcost";
        }

        randomizer();

        document.querySelector("button").addEventListener("click", randomizer);
    });

// this is test code //

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);

        const places = jsonObject;
        places.forEach((place) => {
            let card = document.createElement("dl");
            let name = document.createElement("dt");
            let city = document.createElement("dd");
            let tourcost = document.createElement("dd");



            name.innerHTML = `${place.name}`;
            city.innerHTML = `${place.city}`;
            tourcost.innerHTML = `${place.tourcost}`;



            card.appendChild(name);
            card.appendChild(city);
            card.appendChild(tourcost);



            document.querySelector("div.cards").appendChild(card);
        });
    });





const placebutton = document.getElementById("showrandomplace");
placebutton.addEventListener("click", showrandom);

function showrandom() {
    let x = document.getElementById("randomplace");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const listbutton = document.getElementById("listbutton");
listbutton.addEventListener("click", showlist);

function showlist() {
    let x = document.getElementById("placeList");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}