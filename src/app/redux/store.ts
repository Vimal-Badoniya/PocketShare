import { configureStore } from "@reduxjs/toolkit";
import newLedgerReducer from "./slices/newLedgerSlice";
import newExpenseReducer from "./slices/newExpenseSlice";
import ledgerListReducer from "./slices/ledgerListSlice";

const store = configureStore({
  reducer: {
    newLedger: newLedgerReducer,
    ledgerList: ledgerListReducer,
    newExpense: newExpenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
