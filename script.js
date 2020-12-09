function getPokemon() {
  var identifier = document.getElementById("userInput").value;
  identifier = identifier.toLowerCase();
  var reqUrl = "https://pokeapi.co/api/v2/pokemon/" + identifier;

  fetch(reqUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const pokemon = {
        name: data.name,
        id: data.id,
        sprite: data.sprites["front_default"],
        spriteShiny: data.sprites["front_shiny"],
        type: data.types.map((type) => type.type.name).join(", "),
      };
      console.log(pokemon);

      document.getElementById("sprite").src = pokemon.sprite;
      document.getElementById("spriteShiny").src = pokemon.spriteShiny;
      document.getElementById("name").innerHTML = "Name: " + pokemon.name;
      document.getElementById("idNum").innerHTML = "PokeDex ID: " + pokemon.id;
      document.getElementById("type").innerHTML = "Type: " + pokemon.type;
      document.getElementById("nameShiny").innerHTML = "Name: " + pokemon.name;
      document.getElementById("idNumShiny").innerHTML =
        "PokeDex ID: " + pokemon.id;
      document.getElementById("typeShiny").innerHTML = "Type: " + pokemon.type;
    })
    .catch((error) => console.log("ERROR"));
}
