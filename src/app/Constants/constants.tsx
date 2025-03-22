import { AiFillMacCommand, AiOutlineCreditCard } from "react-icons/ai";
import { PiShoppingCartLight } from "react-icons/pi";

import {
  ExpenseCategoryType,
  Ledger,
  LedgerType,
  ListItem,
  Transaction,
} from "./interfaces";
import { FaHandHoldingMedical, FaPlaneDeparture } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdBrunchDining } from "react-icons/md";
import { BsFillHouseHeartFill, BsFuelPumpFill, BsShop } from "react-icons/bs";
import { IoAirplaneOutline, IoNewspaperOutline } from "react-icons/io5";
import { FcGraduationCap, FcLock } from "react-icons/fc";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { RiFolderReceivedLine } from "react-icons/ri";

export const GROUP = "GROUP";
export const TIMEFRAME = "TIMEFRAME";

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

export type CATEGORY =
  | typeof FOOD
  | typeof TRAVEL
  | typeof RENT
  | typeof ENTERTAINMENT
  | typeof OTHERS
  | typeof GROCERIES
  | typeof HOUSEHOLD
  | typeof REGULAR_BILL
  | typeof MEDICAL
  | typeof FEES
  | typeof FUEL
  | typeof EMIs
  | typeof SAVING
  | typeof INVESTMENT
  | typeof VEGETABLE
  | typeof RECEIVABLES;

export const ENTERTAINMENT = "ENTERTAINMENT";
export const GROCERIES = "GRORIES";
export const FOOD = "FOOD";
export const HOUSEHOLD = "HOUSEHOLD";
export const REGULAR_BILL = "REGULAR_BILL";
export const RENT = "RENT";
export const MEDICAL = "MEDICAL";
export const FEES = "FEES";
export const FUEL = "FUEL";
export const TRAVEL = "TRAVEL";
export const EMIs = "EMIs";
export const SAVING = "SAVING";
export const INVESTMENT = "INVESTMENT";
export const VEGETABLE = "VEGETABLE";
export const RECEIVABLES = "RECEIVABLES";
export const OTHERS = "OTHERS";

export const LEDGER_TYPE_ICON = {
  [TRIP]: <FaPlaneDeparture />,
  [MONTHLY]: <FaRegCalendarCheck />,
};

export const EXPENSE_CATEGORY_ICON = {
  [ENTERTAINMENT]: <AiFillMacCommand />,
  [GROCERIES]: <PiShoppingCartLight />,
  [FOOD]: <MdBrunchDining />,
  [HOUSEHOLD]: <BsFillHouseHeartFill />,
  [REGULAR_BILL]: <IoNewspaperOutline />,
  [RENT]: <BsShop />,
  [MEDICAL]: <FaHandHoldingMedical />,
  [FEES]: <FcGraduationCap />,
  [FUEL]: <BsFuelPumpFill />,
  [TRAVEL]: <IoAirplaneOutline />,
  [EMIs]: <AiOutlineCreditCard />,
  [SAVING]: <HiOutlineDocumentCurrencyRupee />,
  [INVESTMENT]: <FaMoneyBillTrendUp />,
  [VEGETABLE]: <GiFruitBowl />,
  [RECEIVABLES]: <RiFolderReceivedLine />,
  [OTHERS]: <FcLock />,
};

export const EXPENSE_CATEGORY: ExpenseCategoryType[] = [
  {
    id: ENTERTAINMENT,
    value: ENTERTAINMENT,
    label: "Entertainment",
    icon: <AiFillMacCommand />,
  },
  {
    id: GROCERIES,
    value: GROCERIES,
    label: "Groceries",
    icon: <PiShoppingCartLight />,
  },
  {
    id: FOOD,
    value: FOOD,
    label: "Food & Drinks",
    icon: <MdBrunchDining />,
  },
  {
    id: HOUSEHOLD,
    value: HOUSEHOLD,
    label: "Households",
    icon: <BsFillHouseHeartFill />,
  },
  {
    id: REGULAR_BILL,
    value: REGULAR_BILL,
    label: "Reguar Bills (Gas/Wifi/Electricity/Mobile etc.)",
    icon: <IoNewspaperOutline />,
  },
  {
    id: RENT,
    value: RENT,
    label: "Rent",
    icon: <BsShop />,
  },
  {
    id: MEDICAL,
    value: MEDICAL,
    label: "Medical (Medicine/Doctore Fees etc.)",
    icon: <FaHandHoldingMedical />,
  },
  {
    id: FEES,
    value: FEES,
    label: "Fees (School/College/Coaching etc.)",
    icon: <FcGraduationCap />,
  },
  {
    id: FUEL,
    value: FUEL,
    label: "Fuel",
    icon: <BsFuelPumpFill />,
  },
  {
    id: TRAVEL,
    value: TRAVEL,
    label: "Travelling",
    icon: <IoAirplaneOutline />,
  },
  {
    id: EMIs,
    value: EMIs,
    label: "EMI Payment",
    icon: <AiOutlineCreditCard />,
  },
  {
    id: SAVING,
    value: SAVING,
    label: "Saving",
    icon: <HiOutlineDocumentCurrencyRupee />,
  },
  {
    id: INVESTMENT,
    value: INVESTMENT,
    label: "Investments",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    id: VEGETABLE,
    value: VEGETABLE,
    label: "Fruits & Vegetables",
    icon: <GiFruitBowl />,
  },
  {
    id: RECEIVABLES,
    value: RECEIVABLES,
    label: "Receivables (Loan to Friend/Family etc)",
    icon: <RiFolderReceivedLine />,
  },
  {
    id: OTHERS,
    value: OTHERS,
    label: "Others",
    icon: <FcLock />,
  },
];

export const DEFAULT_EMPTY_TRANSACTION: Transaction = {
  id: "",
  paidBy: "",
  amount: 0,
  description: "",
  category: OTHERS,
  transactionDate: "0",
};
