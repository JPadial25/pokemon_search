let buttonRef = document.getElementById('generateButton');
let mainInput = document.getElementById('pokeInput');
let pokeImg = document.getElementById('pokeImg');
let pokeTitle = document.getElementById('pokeTitle');
let translate_result = document.getElementById('translation');
 
function generatePokemon(event){
    event.preventDefault();
    let pokemonInput = Math.floor(Math.random()*1026);
    console.log(pokemonInput);
    
    fetch('https://pokeapi.co/api/v2/pokemon/'+ pokemonInput)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);

        pokeImg.src = myJson.sprites['front_default'];
        pokeImg.style.width = "250px";
        pokeTitle.innerText = "Hey, heres a cool pokemon I found :D";
       
    })
}



function translate(event){
    event.preventDefault()
    let translateInput = mainInput.value;
    console.log(translateInput);


    fetch('https://api.funtranslations.com/translate/minion.json?text='+ translateInput)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(myJson2){
        console.log(myJson2);
        translation.innerText = myJson2.contents['translated'];
    })
}

buttonRef.addEventListener("click", translate);
buttonRef.addEventListener("click", generatePokemon);