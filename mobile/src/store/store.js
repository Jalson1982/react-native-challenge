import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cuisines from "./reducers/cuisines";

const rootReducer = combineReducers({
  cuisines,
});

const resettableRootReducer = (state, action) => {
  if (action.type === "store/reset") {
    return rootReducer(undefined, action);
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
