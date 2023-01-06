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
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
};

let storage = loadStorage()
storage.forEach(id => {
    fetch(`https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`, options)
        .then(response => response.json())
        .then(response => {
        console.log(response);
        todas_container.innerHTML += `<article class="pelicula_item"> 
                                          <a href=detail/${response[0].details.id}>
                                            <img class="imagen" src="${response[0].details.backgroundImage.url}" alt="img">
                                            <div class="titulo">
                                              <h2>${response[0].details.title}</h2>
                                            </div>
                                          </a>
                                        </article>`
      })
    });