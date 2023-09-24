

const pesquisarFilmes = async (req, res) =>{

    const { titulo } = req.query

    try{

        const resultado = `https://www.omdbapi.com/?t=${titulo}&apikey=${process.env.KEY_OMDB}`

        res.status(200).json(resultado)


    }catch(error){
        console.log(error)
        res.status(500).json('Erro interno no servidor')
    }

} 

module.exports = {
    pesquisarFilmes
}