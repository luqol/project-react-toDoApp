import shortid from "shortid";

//selectors

export const getListByID = ({lists}, listID) => lists.find( list => list.id === listID);
export const getAllLists = state => state.lists ;

//action
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//actions creators
export const addList = payload => ({type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {
    switch (action.type){
      case ADD_LIST:
        return [...statePart, {id: shortid(), ...action.payload}];
      default:
        return statePart;
    }
  };

  export default listsReducer;