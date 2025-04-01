import { ReactNode } from "react";

export interface User {
  id: string; //unique user id
  name: string;
  email: string;
  createdLedgers: string[]; //id of ledgers
  extendedLedgers: string[];
}

export interface Ledger {
  id: string;
  createdBy: string;
  name: string;
  description?: string;
  createdAt: number;
  transactions: Transaction[];
  participants: Participant[];
  ledgerType: string;
  imgUrl: "";
}

export interface Transaction {
  id: string;
  amount: number;
  transactionDate: string;
  description?: string;
  paidBy: string; //user id
  share?: Share[];
  category: string; //Food, Travel, Rent
}

//share may be equally divide between all the members or may be user defined percentage
export interface Share {
  userId: string;
  userName: string;
  percentage?: number;
  amount?: number;
}

//may be a registered user or a new member added for ledger only
export interface Participant {
  name: string;
  id: string;
}

export interface ListItem {
  id: string;
  label: string;
  value: string;
  icon?: ReactNode;
}

export interface LedgerType {
  id: string;
  label: string;
  value: string;
  name: string;
}

export interface ExpenseCategoryType {
  id: string;
  label: string;
  value: string;
  icon: ReactNode;
}

export interface DropdownOption {
  id: string;
  label: string;
  value: string;
  icon: ReactNode;
}
