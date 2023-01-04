module.exports = {
    all: async (req, res) => {//este metodo all muestra un json con todas las peliculas (async permite definir las lineas de codigo que tengo que esperar)
        try {
            res.render('index')

        } catch (error) {
            console.log(error);
        }
    },
    detail: async(req,res) =>{
        const movieId = req.params.id;
        res.render('detail')
    }
}