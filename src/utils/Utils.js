import Bowser from "bowser";

export const isMobileView = () => {
  if (typeof window !== "undefined") {
    const deviceType = Bowser.getParser(
      window.navigator.userAgent
    ).getPlatformType();
    if (deviceType === "mobile") {
      return true;
    }
  }
  return false;
};
