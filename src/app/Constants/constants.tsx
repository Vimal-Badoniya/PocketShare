import { Ledger, LedgerType, ListItem } from "./interfaces";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";

export const GROUP = "GROUP";
export const TIMEFRAME = "TIMEFRAME";

export const FOOD = "FOOD";
export const TRAVEL = "TRAVEL";
export const RENT = "RENT";
export const UTILITIES = "UTILITIES";
export const OTHERS = "OTHERS";

export type CATEGORY =
  | typeof FOOD
  | typeof TRAVEL
  | typeof RENT
  | typeof UTILITIES
  | typeof OTHERS;

export const TRIP = "TRIP";
export const MONTHLY = "MONTHLY";
export const LEDGER_TYPE: LedgerType[] = [
  {
    id: "1",
    label: "Trip",
    value: "TRIP",
    name: "Trip Name",
  },
  {
    id: "2",
    label: "Monthly Expense",
    value: "MONTHLY",
    name: "Monthly Expense Name",
  },
];
export const NEW_LEDGER_TITLE: ListItem[] = [
  { id: TRIP, label: "Trip Name", value: TRIP },
  { id: MONTHLY, label: "Monthly Expense Name", value: MONTHLY },
];

export const DEFAULT_EMPTY_LEDGER: Ledger = {
  id: "",
  createdBy: "PS1",
  name: "",
  createdAt: 0,
  ledgerType: TRIP,
  description: "",
  transactions: [],
  participants: [],
  imgUrl: "",
};

export const LEDGERS_DB = "ledgers";
export const USERS_DB = "users";

export const LEDGER_TYPE_ICON = {
  [TRIP]: <FaPlaneDeparture />,
  [MONTHLY]: <FaRegCalendarCheck />,
};
