const { combineReducers } = require("redux");
const { default: searchReducer } = require("./ducks/search");

const rootReducer = combineReducers({
    search: searchReducer
})

export default rootReducer;