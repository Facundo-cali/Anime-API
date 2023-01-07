const todas_container = document.querySelector('.todas_container');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8637805064msh29444fb9b11bf23p14737fjsn7df18b3f1fff',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=30', options)
	.then(response => response.json())
  .then(response => {
    console.log(response);
    response.data.forEach(movie => {
      todas_container.innerHTML += `<article class="pelicula_item">
                                        <a href=detail/${movie._id}>
                                        <img class="imagen" src="${movie.image}" alt="img">
                                        <div class="titulo">
                                        <h2>${movie.title}</h2>
                                        </div>
                                        </a>
                                    </article>`
  })
})