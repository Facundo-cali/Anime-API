const todas_container = document.querySelector('.todas_container');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8637805064msh29444fb9b11bf23p14737fjsn7df18b3f1fff',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};
fetch(`https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en`, options)
	.then(response => response.json())
	.then(response => {
    console.log(response);
    response.titles.forEach(movie => {
      todas_container.innerHTML += `<article class="pelicula_item"> 
                                      <a href=detail/${movie.summary.id}>
                                        <img class="imagen" src="${movie.jawSummary.backgroundImage.url}" alt="img">
                                        <div class="titulo">
                                          <h2>${movie.jawSummary.title}</h2>
                                        </div>
                                      </a>
                                    </article>`
  })
});