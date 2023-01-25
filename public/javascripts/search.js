document.addEventListener("keyup", e=>{
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.pelicula_item').forEach(movie => {
            if (movie.innerText.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
                movie.classList.remove('filtro');
            } else {
                movie.classList.add('filtro');
            }
            
        })
    }   
})