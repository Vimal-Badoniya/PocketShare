import { configureStore } from "@reduxjs/toolkit";
import newLedgerReducer from "./slices/newLedgerSlice";
import ledgerListReducer from "./slices/ledgerListSlice";

const store = configureStore({
  reducer: {
    newLedger: newLedgerReducer,
    ledgerList: ledgerListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
