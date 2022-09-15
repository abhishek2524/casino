// import Bowser from "bowser";

// export const isMobileView = () => {
//   if (typeof window !== "undefined") {
//     const deviceType = Bowser.getParser(
//       window.navigator.userAgent
//     ).getPlatformType();
//     if (deviceType === "mobile") {
//       return true;
//     }
//   }
//   return false;
// };

export const card_type = {
  dragon: -1,
  tiger: 1,
  tie: 0,
  pair: 2,
};

export const card_type_name = {
  0: "spades/p",
  1: "diamonds/l",
  2: "clubs/k",
  3: "hearts/s",
};

export const card_value_name = {
  0: "a",
  1: "2",
  2: "3",
  3: "4",
  4: "5",
  5: "6",
  6: "7",
  7: "8",
  8: "9",
  9: "10",
  10: "j",
  11: "q",
  12: "k",
};
