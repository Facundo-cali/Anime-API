module.exports = {
    all: async (req, res) => {//este metodo all muestra un json con todas las peliculas (async permite definir las lineas de codigo que tengo que esperar)
        try {
            res.render('index')
        } catch (error) {
            console.log(error);
        }
    },
    detail: async(req,res) =>{
        try {
            res.render('details')
        } catch (error) {
            console.log(error);
        }
    },
    favorites: async(req,res) =>{
        try {
            res.render('favorites')
        } catch (error) {
            console.log(error);
        }
    },
    recommended: async(req,res) =>{
        try {
            res.render('recommended')
        } catch (error) {
            console.log(error);
        }
    }
}