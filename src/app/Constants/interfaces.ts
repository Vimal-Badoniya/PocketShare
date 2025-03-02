export interface User {
  id: string; //unique user id
  name: string;
  email: string;
  createdLedgers: string[]; //id of ledgers
  extendedLedgers: string[];
}

export interface Ledger {
  id: string; //unique id of each ledger
  createdBy: string; //id of the user who created the ledger
  name: string; // Budget for March , Kashmir Trip
  description?: string; //extra notes
  createdAt: number; //UTC timestamp
  transactions: [];
  startDate: number; //Timestamp if ledger is time based - week , month , year
  endDate: number;
  participants: Participant[]; //Members for sharing the expense
}

export interface Transaction {
  id: string;
  amount: number;
  transactionDate: number;
  description: string;
  paidBy: string; //user id
  share: Share[];
}

//share may be equally divide between all the members or may be user defined percentage
export interface Share {
  userId: string;
  userName: string;
  percentage: number;
}

//may be a registered user or a new member added for ledger only
export interface Participant {
  name: string;
  id: string;
}
