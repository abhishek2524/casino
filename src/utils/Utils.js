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

export const card_type = {
  dragon: -1,
  tiger: 1,
  tie: 0,
  pair: 2,
};

const card_value_type = {
  "-1": "dragon",
  1: "tiger",
  0: "tie",
  2: "pair",
};

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
    console.log("Error while fetching token::", err.response.data);
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
            gamePLayed = card_value_type[d.card_type];
            gameAmount = d.card_type_amount.toString();
            gameWinStatus = d.card_type_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_OE !== "False") {
            gamePLayed = d.card_Dragon_OE == 0 ? "Dragon Even" : "Dragon Odd";
            gameAmount = d.card_Dragon_OE_amount.toString();
            gameWinStatus = d.card_Dragon_OE_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_OE !== "False") {
            gamePLayed = d.card_Tiger_OE == 0 ? "Tiger Even" : "Tiger Odd";
            gameAmount = d.card_Tiger_OE_amount.toString();
            gameWinStatus = d.card_Tiger_OE_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_color !== "False") {
            gamePLayed =
              d.card_Dragon_color == 0 ? "Dragon Red" : "Dragon Black";
            gameAmount = d.card_Dragon_color_amount.toString();
            gameWinStatus = d.card_Dragon_color_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_color !== "False") {
            gamePLayed =
              d.card_Tiger_color == 0 ? "Dragon Red" : "Dragon Black";
            gameAmount = d.card_Tiger_color_amount.toString();
            gameWinStatus = d.card_Tiger_color_is_win ? "Won" : "Loss";
          } else if (d.card_Dragon_number !== "False") {
            gamePLayed = `Dragon Card ${card_value_name[d.card_Dragon_number]}`;
            gameAmount = d.card_Dragon_number_amount.toString();
            gameWinStatus = d.card_Dragon_number_is_win ? "Won" : "Loss";
          } else if (d.card_Tiger_number !== "False") {
            gamePLayed = `Tiger Card ${card_value_name[d.card_Tiger_number]}`;
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
    console.log("Error while fetching token1::", err.response);
    if (err.response.status === 401) {
      localStorage.clear();
      window.location.reload();
      return;
    }
  }
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

// Lucky 77 games config
export const gamesWsApi = {
  dragon: "/bid/DragonTiger",
  lucky7: "/bid/luck77",
  teenpati: "",
  card32: "",
  andarBahar: "",
  queen: "",
  poker: "",
  race20: "",
};

export const card_lh_type = {
  low: 0,
  high: 1,
};

export const cards_number_list = [
  { value: 0, name: "A" },
  { value: 1, name: "2" },
  { value: 2, name: "3" },
  { value: 3, name: "4" },
  { value: 4, name: "5" },
  { value: 5, name: "6" },
  { value: 6, name: "7" },
  { value: 7, name: "8" },
  { value: 8, name: "9" },
  { value: 9, name: "10" },
  { value: 10, name: "J" },
  { value: 11, name: "Q" },
  { value: 12, name: "K" },
];

export const OEVal = { odd: 1, even: 0 };

export const color_obj = { black: 1, red: 0 };
