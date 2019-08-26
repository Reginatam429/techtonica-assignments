  $(document).ready(function () {
    getPokemonList();
  
    $('#pokeList').change(function(){
      getSpecificPokemon(this.value);
    })
    
  });
  
  const getPokemonList = () => {
    var request = $.ajax('https://pokeapi.co/api/v2/pokemon/')
      .done(function (response) {
        // console.log(response);
        const jsonResponse = response.results;
        // console.log(jsonResponse);
  
        jsonResponse.forEach( pokemon => {
          // console.log(pokemon.name);
          const html = `<option value=${pokemon.name}>${pokemon.name}</option>`;
          $('#pokeList').append(html);
        });
      })
      .fail(function (response) {
        console.log(response);
      })
      .always(function () {
        console.log('DONE');
      });
  }
  
  const getSpecificPokemon = name => {
    var request = $.ajax('https://pokeapi.co/api/v2/pokemon/' + name)
    .done(function (response) {
      const imgSource = response.sprites.front_default;
   
      const imgHtml = `<img src=${imgSource}>`; 
      $('#pokemonImage').html(imgHtml);
    })
    .fail(function (response) {
      console.log(response);
    })
    .always(function () {
      console.log('DONE ', name );
    });
  }