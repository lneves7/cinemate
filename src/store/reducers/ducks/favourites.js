/**
 * ---------------------------- ACTIONS ---------------------
 */
const ADD_FAVOURITE = "ADD_FAVOURITE";
const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = payload => ({type: ADD_FAVOURITE, payload});
export const removeFavourite = payload => ({type: REMOVE_FAVOURITE, payload});

/**
 * -------------------INIT STATE ----------------------------
 */
const INITIAL_STATE = {
    movies : []
}

const favouritesReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case ADD_FAVOURITE:
            return {...state, movies: [...state.movies, payload]};
        case REMOVE_FAVOURITE:
            return {...state, movies: state.movies.filter(f => f.imdbID !== payload)};
        default:
            return state;
    }
}

export default favouritesReducer;