import shortid from "shortid";
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchedPhrase}, columnId) => cards
  .filter(card => card.columnId === columnId &&
     strContains(card.title, searchedPhrase));
export const getFavoriteCards = state => state.cards.filter( card => card.isFavorite === true );

//action
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITED = createActionName('TOGGLE_CARD_FAVORITED');
const REMOVE_CARD = createActionName('REMOVE_CARD');

//action creators
export const addCard = payload => ({type: ADD_CARD, payload});
export const updateCardFavorite = payload => ({type: TOGGLE_CARD_FAVORITED, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload});

const cardsReducer = (statePart = [], action) => {
    switch (action.type){
      case ADD_CARD:
        return  [...statePart, {id: shortid(), ...action.payload, isFavorite: false}];
      case TOGGLE_CARD_FAVORITED:
        return statePart.map(card => 
          (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card );
        case REMOVE_CARD:
          return statePart.filter( card => card.id !== action.payload);
      default:
        return statePart;
    }
  };

  export default cardsReducer;