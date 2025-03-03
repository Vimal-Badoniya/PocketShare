export const GROUP = "GROUP";
export const TIMEFRAME = "TIMEFRAME";

export const FOOD = "FOOD";
export const TRAVEL = "TRAVEL";
export const RENT = "RENT";
export const UTILITIES = "UTILITIES";
export const OTHERS = "OTHERS";

export type LEDGER_TYPE = typeof GROUP | typeof TIMEFRAME;

export type CATEGORY =
  | typeof FOOD
  | typeof TRAVEL
  | typeof RENT
  | typeof UTILITIES
  | typeof OTHERS;
