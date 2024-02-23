import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchedPhrase}, columnId) => cards
  .filter(card => card.columnId === columnId &&
     strContains(card.title, searchedPhrase));

export const getAllCollumns = state => state.columns;

//action creators

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});

export const addCard = payload => ({type: 'ADD_CARD', payload});

export const updateSearchPhrase = payload => ({type: 'SEARCH_PHRASE',  payload})

const reducer = (state, action) => {

  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {id: shortid(), ...action.payload}]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {id: shortid(), ...action.payload}]};
    case 'SEARCH_PHRASE':
      return {...state, searchedPhrase: action.payload};
    default:
      return state;
    }

};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;