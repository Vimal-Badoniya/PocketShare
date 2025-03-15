import { DEFAULT_EMPTY_TRANSACTION } from "@/app/Constants/constants";
import { Participant, Transaction } from "@/app/Constants/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Transaction = DEFAULT_EMPTY_TRANSACTION;

interface AddTransactionField {
  fieldType: keyof Transaction;
  value: string | number | Transaction[] | Participant[];
}

const newTransactionSlice = createSlice({
  name: "newTransaction",
  initialState,
  reducers: {
    addNewTransactionField: (
      state,
      action: PayloadAction<AddTransactionField>
    ) => {
      const { fieldType, value } = action.payload;
      (state[fieldType] as typeof value) = value;
    },
  },
});

export const { addNewTransactionField } = newTransactionSlice.actions;
export default newTransactionSlice.reducer;
