import favouritesReducer from "./ducks/favourites";
import searchReducer from './ducks/search';
import viewModeReducer from "./ducks/viewMode";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    search: searchReducer,
    favourites: favouritesReducer,
    viewMode: viewModeReducer
})

export default rootReducer;