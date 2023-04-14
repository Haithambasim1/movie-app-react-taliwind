import axios from "axios"



const movieBaseUrl = "https://api.themoviedb.org/3/movie"
const movieByGenraBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=68f31f0dece50fa44cc3974411285909"

const api_key = "68f31f0dece50fa44cc3974411285909"


const getPupularMovies = axios.get(movieBaseUrl + "/popular?api_key=" +api_key);
const getMovieByGenraId = (id)=>axios.get(movieByGenraBaseUrl+"&with_genres="+id)
export default{
    getPupularMovies,
    getMovieByGenraId
}