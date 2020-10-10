/**
 * ---------------------------- ACTIONS ---------------------
 */
const CHANGE_SEARCH_RESULTS = "CHANGE_SEARCH_RESULTS";

export const changeSearchResults = payload => ({type: CHANGE_SEARCH_RESULTS, payload});

/**
 * ----------------------------- INIT STATE
 */
const INITIAL_STATE = {
    results: false,
    activePage: 1
}

const searchReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case CHANGE_SEARCH_RESULTS:
            return {...state, results: payload};
        default:
            return state;
    }
}

export default searchReducer;