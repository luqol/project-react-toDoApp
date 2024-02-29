import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import searchPhaseReducer from './searchPhaseRedux';
import columnsReducer from './columnsRedux';
import listsReducer from './listsRedux';
import cardsReducer from './cardsRedux';


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchedPhrase: searchPhaseReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;