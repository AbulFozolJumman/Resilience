import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import { suppliesApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [suppliesApi.reducerPath]: suppliesApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(suppliesApi.middleware),
});
