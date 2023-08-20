import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux/dataSlice";
import quizReducer from "./quizReducer";
import languagesReducer from "./languagesReducer";
export const store = configureStore({
  reducer: {
    data: dataReducer,
    quiz: quizReducer,
    language: languagesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
