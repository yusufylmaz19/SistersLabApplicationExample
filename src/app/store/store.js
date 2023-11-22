import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import extraReducer from "./slices/extraSlice";
import postReducer from "./slices/postSlice";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const rootReducer = combineReducers({
  counter: counterReducer,
  extra: extraReducer,
  posts: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
