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
