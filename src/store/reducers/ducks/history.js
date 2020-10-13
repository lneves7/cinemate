/**
 * ---------------------------- ACTIONS ---------------------
 */
const ADD_HISTORY = "ADD_HISTORY";

export const addHistory = payload => ({type: ADD_HISTORY, payload});

/**
 * ----------------------------- INIT STATE
 */
const INITIAL_STATE = {
    data: [],
}

const historyReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type){
        case ADD_HISTORY:
            return {...state, data: [...state.data, payload]};
        default:
            return state;
    }
}

export default historyReducer;