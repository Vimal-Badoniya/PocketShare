import { DEFAULT_EMPTY_LEDGER } from "@/app/Constants/constants";
import { Ledger, Participant, Transaction } from "@/app/Constants/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Ledger = DEFAULT_EMPTY_LEDGER;

interface AddLedgerField {
  fieldType: keyof Ledger;
  value: string | number | Transaction[] | Participant[];
}

const newLedgerSlice = createSlice({
  name: "newLedger",
  initialState,
  reducers: {
    addNewLedgerField: (state, action: PayloadAction<AddLedgerField>) => {
      const { fieldType, value } = action.payload;
      (state[fieldType] as typeof value) = value;
    },
  },
});

export const { addNewLedgerField } = newLedgerSlice.actions;
export default newLedgerSlice.reducer;
