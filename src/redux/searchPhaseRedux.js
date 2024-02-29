//selector
export const getSearchPhase = state => state.searchedPhrase;

//action
const createActionName = actionName => `app/SEARCH_PHASE/${actionName}`;
const UPDATE_SEARCH_PHASE = createActionName('UPDATE_SEARCH_PHASE');

//action creators
export const updateSearchPhrase = payload => ({type: UPDATE_SEARCH_PHASE,  payload});
const searchPhaseReducer = (statePart = '', action) => {
    switch (action.type){
      case UPDATE_SEARCH_PHASE:
        return  action.payload;
      default:
        return statePart;
    }
  };

  export default searchPhaseReducer;