import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const initialState: RepositoriesState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPOSITORIES_FAILED:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
