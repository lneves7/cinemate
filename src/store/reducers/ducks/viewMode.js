/**
 *------------ CONSTANTES AUXILIARES PARA EXPORTAR----------
 */
export const VIEW_MODE_SEARCH = 'SEARCH';
export const VIEW_MODE_FAVOURITES = 'FAVOURITES';
export const VIEW_MODE_MOVIE = 'MOVIE';

/**
 * ---------------------------- ACTIONS ---------------------
 */
const SET_VIEW_MODE = "SET_VIEW_MODE";
const SET_MOVIE_MODE = "SET_MOVIE_MODE";

export const setViewMode = payload => ({type: SET_VIEW_MODE, payload});
export const setMovieMode = payload => ({type: SET_MOVIE_MODE, payload});

/**
 * ----------------------------- INIT STATE
 */
const INITIAL_STATE = {
    value: VIEW_MODE_SEARCH,
    prev: false, //VIEW_MODE anterior para botoes de voltar
    movie: false //imdbID do filme quando o value for VIEW_MODE_MOVIE
}

const viewModeReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case SET_VIEW_MODE:
            return {...state, value: payload, prev: state.value};
        case SET_MOVIE_MODE:
            return {...state, value: VIEW_MODE_MOVIE, movie: payload, prev: state.value};
        default:
            return state;
    }
}

export default viewModeReducer;