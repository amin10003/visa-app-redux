import { configureStore } from "@reduxjs/toolkit";
import visaReducer from "../features/visa/visaSlice";

export const store = configureStore({
  reducer: {
    visa: visaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;