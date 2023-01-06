const todas_container = document.querySelector('.todas_container');

function loadStorage() {
    let storage = localStorage.getItem('favorites')// si el usuario nunca habia entrado devuelve null
    if (storage == null) { //si no tenia favoritos, creamos el array que guarda los favoritos, pero este se crea como un string, asique en el else debemos transformarlo a numero con JSON.parse.
      storage = [];
    }else{
        storage = JSON.parse(storage)
    }
    return storage;
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8637805064msh29444fb9b11bf23p14737fjsn7df18b3f1fff',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

let storage = loadStorage()
storage.forEach(id => {
    fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${id}`, options)
    .then(response => response.json())
      .then(movie => {
        todas_container.innerHTML += `<article class="pelicula_item"> 
                                          <a href=detail/${movie._id}>
                                            <img class="imagen" src="${movie.image}" alt="img">
                                            <div class="titulo">
                                              <h2>${movie.title}</h2>
                                            </div>
                                          </a>
                                        </article>`
      })
    });