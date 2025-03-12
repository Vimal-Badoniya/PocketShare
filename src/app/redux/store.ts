import { configureStore } from "@reduxjs/toolkit";
import newLedgerReducer from "./slices/newLedgerSlice";

const store = configureStore({
  reducer: {
    newLedger: newLedgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
