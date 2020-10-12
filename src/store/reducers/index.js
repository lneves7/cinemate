import favouritesReducer from "./ducks/favourites";
import searchReducer from './ducks/search';
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    search: searchReducer,
    favourites: favouritesReducer
})

export default rootReducer;