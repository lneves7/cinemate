import { Store } from "../store";
import { setActivePage } from "../store/reducers/ducks/search";
const { default: Axios } = require("axios")

const MovieApi = () => {

    const API_KEY = '8980340a';

    let instance = Axios.create({
        baseURL: `http://omdbapi.com/`,
        timeout: 60000
    });

    const fetchMovies = (query, page) => {
        if(!page)
            Store.dispatch(setActivePage(1));
            
        return instance.get('', { params: {
            apikey: API_KEY,
            s : query.trim(),
            type : 'movie',
            page
        }});
    }

    const fetchMovieData = (titleId) => {
        return instance.get('', { params: {
            apikey: API_KEY,
            i : titleId,
            type : 'movie',
            plot : 'full'
        }});
    }

    return {
        fetchMovies,
        fetchMovieData
    };
}

export default MovieApi;