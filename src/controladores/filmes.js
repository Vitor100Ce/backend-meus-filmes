const axios = require('axios')

const pesquisarFilmes = async (req, res) =>{

    const { titulo } = req.query

    try{

        const url = `https://www.omdbapi.com/?t=${titulo}&apikey=${process.env.KEY_OMDB}`

        const response = await axios.get(url);

        const filmeData = response.data;

        const filme = {
            titulo: filmeData.Title,
            ano: filmeData.Year,
            classificao: filmeData.Rated,
            dataLancamento: filmeData.Released,
            duracao: filmeData.Runtime,
            genero: filmeData.Runtime,
            direcao: filmeData.Director,
            roteiro: filmeData.Writer,
            elenco: filmeData.Actors,
            sinopse: filmeData.Plot,
            premiacoes: filmeData.Awards,
            idImdb: filmeData.imdbID

        }

        res.status(200).json(filme)


    }catch(error){
        console.log(error)
        res.status(500).json('Erro interno no servidor')
    }

} 

module.exports = {
    pesquisarFilmes
}