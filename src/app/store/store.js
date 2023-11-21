import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import extraReducer from "./slices/extraSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const rootReducer = combineReducers({
  counter: counterReducer,
  extra: extraReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
