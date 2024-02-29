import shortid from "shortid";

//selectors
export const getAllCollumns = ({columns}, listId) => columns.filter(column => column.listId === listId) ;

//action
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//action creation
export const addColumn = payload => ({type: ADD_COLUMN, payload});
const columnsReducer = (statePart = [], action) => {
  switch (action.type){
    case ADD_COLUMN:
      return [...statePart, {id: shortid(), ...action.payload}];
    default:
      return statePart;
  }
};

export default columnsReducer;