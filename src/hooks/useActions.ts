import { useDispatch } from "react-redux";
import { actionCreators } from "../store";
import { bindActionCreators } from "redux";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

export default useActions;
