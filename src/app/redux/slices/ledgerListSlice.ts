import { Ledger } from "@/app/Constants/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Ledger[] = [];

const ledgerListSlice = createSlice({
  name: "ledgerList",
  initialState,
  reducers: {
    setLedgerList: (state, action) => {
      return action.payload;
    },
  },
});

export const { setLedgerList } = ledgerListSlice.actions;
export default ledgerListSlice.reducer;
