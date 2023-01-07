const container = document.querySelector('.movie__detail');
var allUrl =  window.location.href
var result = window.location.href.split('/').reverse()[0]


function loadStorage() {
    let storage = localStorage.getItem('favorites')// si el usuario nunca habia entrado devuelve null
    if (storage == null) { //si no tenia favoritos, creamos el array que guarda los favoritos, pero este se crea como un string, asique en el else debemos transformarlo a numero con JSON.parse.
      storage = [];
    }else{
      storage = JSON.parse(storage)
    }
    return storage;
}

function addFavorite(id,e) {
	let storage = loadStorage();
	if (!storage.includes(id)) {// si el id no esta dentro de el array de storage, lo agrega y el boton de add cambia a remove.
		let newStorage = JSON.stringify([...storage,id]);
		localStorage.setItem('favorites',newStorage);
		e.target.innerText = 'Delete from favorites'
	}else{
		storage = storage.filter(idMovie => idMovie != id)
		localStorage.setItem('favorites', JSON.stringify(storage));
		e.target.innerText = 'Add to favorites'
	}
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8637805064msh29444fb9b11bf23p14737fjsn7df18b3f1fff',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch(`https://anime-db.p.rapidapi.com/anime/by-id/${result}`, options)
	.then(response => response.json())
  	.then(movie => {
		console.log(movie)
		container.innerHTML = `	<div class="movie__detail__total ">
									<h2 class="nombre__prod__detail">${movie.title}</h2>
										<img src="${movie.image}" alt="pelicula">
										<p class="descripcion__prod__detail">${movie.synopsis}</p>
										<a class="descripcion__prod__detail" href="" id="favorite" style="background-color: green"></a>
										<h3 class="descripcion__prod__detail" >Genre</h3>
										<div class="descripcion__prod__detail" id="genres"></div>
									</div>`;//en este forEach recorro el array de generos de la pelicula y despues hago el innerHTML en el div con id "generos"
										movie.genres.forEach(gen => {
										genres.innerHTML +=`<li>
																${gen}
															</li>`
										})
											let storage = loadStorage();
											if (storage.includes(result)) {
												favorite.innerText = 'Delete from favorites'
											}else{
												favorite.innerText = 'Add to favorites'
											}
	const addButton = document.querySelector('#favorite');

	addButton.addEventListener('click', function (e) {
		e.preventDefault();
		addFavorite(result,e);
	})
	});




