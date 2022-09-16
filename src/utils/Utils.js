// import Bowser from "bowser";

import axios from "axios";

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

export const fetchExpToken = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/api/user/token`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { status } = res;
    if (status === 200) {
      res.data.token = parseInt(res.data.token);
      res.data.exposure_token = parseInt(res.data.exposure_token);
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token::", err);
  }
};

export const fetchPlacedBet = async () => {
  try {
    const apiURL = `${process.env.REACT_APP_BACKEND_API}/game/dragon_tiger_place_bid`;
    const res = await axios({
      method: "get",
      url: apiURL,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    const { data, status } = res;
    if (status === 200) {
      res.data = data
        .map((d, i) => {
          let gamePLayed = null,
            gameAmount = null,
            gameWinStatus = null;
          if (d.card_type !== "False") {
            gamePLayed = "Card_Type";
            gameAmount = d.card_type_amount.toString();
            gameWinStatus = d.card_type_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_OE !== "False") {
            gamePLayed = "Dragon_OE";
            gameAmount = d.card_Dragon_OE_amount.toString();
            gameWinStatus = d.card_Dragon_OE_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_OE !== "False") {
            gamePLayed = "Tiger_OE";
            gameAmount = d.card_Tiger_OE_amount.toString();
            gameWinStatus = d.card_Tiger_OE_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_color !== "False") {
            gamePLayed = "Dragon_color";
            gameAmount = d.card_Dragon_color_amount.toString();
            gameWinStatus = d.card_Dragon_color_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_color !== "False") {
            gamePLayed = "Tiger_color";
            gameAmount = d.card_Tiger_color_amount.toString();
            gameWinStatus = d.card_Tiger_color_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_number !== "False") {
            gamePLayed = "Dragon_number";
            gameAmount = d.card_Dragon_number_amount.toString();
            gameWinStatus = d.card_Dragon_number_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_number !== "False") {
            gamePLayed = "Tiger_number";
            gameAmount = d.card_Tiger_number_amount.toString();
            gameWinStatus = d.card_Tiger_number_is_win ? "Won" : "Loss";
          }
          return {
            gamePLayed,
            gameAmount,
            gameWinStatus,
            date: d.date,
            id: i,
          };
        })
        .filter((d) => {
          return d.gamePLayed;
        });
    }
    return res;
  } catch (err) {
    console.log("Error while fetching token::", err);
  }
};

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
