import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import profile from "./profile";
import theme from "./theme";

const appReducer = combineReducers({
  profile,
  theme,
  form: formReducer,
});

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return appReducer(state, action);
  }
};

export default rootReducer;
