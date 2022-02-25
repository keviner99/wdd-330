const requestURL = 'https://swapi.dev/api/people/';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.log(jsonObject); 
        
       const resultz = jsonObject['results'];
       resultz.forEach((character) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let haircolor = document.createElement('p');
        let birthyear = document.createElement('p');
        let gender = document.createElement('p');
 
        name.innerHTML = `${character.name}`;
        haircolor.innerHTML = `${character.hair_color}`;
        birthyear.innerHTML = `${character.birth_year}`;
        gender.innerHTML = `${character.gender}`;


        card.appendChild(name);
        card.appendChild(haircolor);
        card.appendChild(birthyear);
        card.appendChild(gender);

        document.querySelector('div.cards').appendChild(card);

        });

    });    

