/**
 * ---------------------------- ACTIONS ---------------------
 */
const CHANGE_SEARCH_RESULTS = "CHANGE_SEARCH_RESULTS";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";

export const changeSearchResults = payload => ({type: CHANGE_SEARCH_RESULTS, payload});

export const setActivePage = payload => ({type: SET_ACTIVE_PAGE, payload})

/**
 * ----------------------------- INIT STATE
 */
const INITIAL_STATE = {
    results: JSON.parse(localStorage.getItem('teste')),
    activePage: 1
}

const searchReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case CHANGE_SEARCH_RESULTS:
            return {...state, results: payload};
        case SET_ACTIVE_PAGE:
            return {...state, activePage: payload}
        default:
            return state;
    }
}

export default searchReducer;