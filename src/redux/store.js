import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchedPhrase}, columnId) => cards
  .filter(card => card.columnId === columnId &&
     strContains(card.title, searchedPhrase));

export const getFavoriteCards = state => state.cards.filter( card => card.isFavorite === true );

export const getAllCollumns = ({columns}, listId) => columns.filter(column => column.listId === listId) ;

export const getListByID = ({lists}, listID) => lists.find( list => list.id === listID);

export const getAllLists = state => state.lists ;

export const getSearchPhase = state => state.searchedPhrase;

//action creators

export const addColumn = payload => ({type: 'ADD_COLUMN', payload});

export const addCard = payload => ({type: 'ADD_CARD', payload});

export const updateSearchPhrase = payload => ({type: 'SEARCH_PHRASE',  payload});

export const addList = payload => ({type: 'ADD_LIST', payload});

export const updateCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});

//reducer function

const listsReducer = (statePart = [], action) => {
  switch (action.type){
    case 'ADD_LIST':
      return [...statePart, {id: shortid(), ...action.payload}];
    default:
      return statePart;
  }
}

const columnsReducer = (statePart = [], action) => {
  switch (action.type){
    case 'ADD_COLUMN':
      return [...statePart, {id: shortid(), ...action.payload}];
    default:
      return statePart;
  }
}

const cardsReducer = (statePart = [], action) => {
  switch (action.type){
    case 'ADD_CARD':
      return  [...statePart, {id: shortid(), ...action.payload, isFavorite: false}];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => 
        (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card );
    default:
      return statePart;
  }
}

const searchPhaseReducer = (statePart = '', action) => {
  switch (action.type){
    case 'SEARCH_PHRASE':
      return  action.payload;
    default:
      return statePart;
  }
}

const reducer = (state, action) => {

  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchedPhrase: searchPhaseReducer(state.searchedPhrase, action),
  };

  return newState;

};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;