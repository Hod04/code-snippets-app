import * as _ from "lodash";

const snippetListsReducer = (
  state = [],
  action: { type: string; payload?: {}; id?: number }
) => {
  switch (action.type) {
    case "FETCH_SNIPPET_LISTS":
      return action.payload;
    case "CREATE_SNIPPET_LIST":
      return action.payload;
    case "DELETE_SNIPPET_LIST":
      return _.filter(state, (elem: { id: number }) => elem.id !== action.id);
    default:
      return state;
  }
};

export default snippetListsReducer;
