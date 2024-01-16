import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Dispatch } from "react";

const searchRepositoriesAction = (): Action => ({
  type: ActionType.SEARCH_REPOSITORIES,
});
const searchRepositoriesSuccessAction = (payload: string[]): Action => ({
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
  payload,
});
const searchRepositoriesFailedAction = (payload: string): Action => ({
  type: ActionType.SEARCH_REPOSITORIES_FAILED,
  payload,
});

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(searchRepositoriesAction());

    const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
      params: { text: term },
    });

    const packagesName: string[] = data.objects.map(
      (result: any) => result.package.name
    );

    dispatch(searchRepositoriesSuccessAction(packagesName));

    try {
    } catch (err) {
      if (err instanceof Error) {
        dispatch(searchRepositoriesFailedAction(err.message));
      }
    }
  };
};
