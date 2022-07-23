import React, { useEffect, useState } from "react";
import AdvanceSearch from "../common/AdvanceSearch";
import CustomTable from "../common/CustomTable";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./betHistory.scss";

function BetHistoryComponent() {
  const [columns, setColumns] = useState([]);
  const [defaultSorted, setDefaultSorted] = useState([]);
  const [data, setData] = useState([]);
  const pageSize = 5;
  const formatCell = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div>
        {cell} <img src="assets/icons/coins.svg" alt="" />
      </div>
    );
  };
  useEffect(() => {
    setColumns([
      { dataField: "game", text: "Game", sort: true },
      { dataField: "payout", text: "Payout", sort: true },
      {
        dataField: "profit_loss",
        text: "Profit/ Loss",
        sort: true,
        formatter: formatCell,
      },
    ]);

    setDefaultSorted([
      {
        dataField: "game",
        order: "desc",
      },
    ]);
    setData([
      {
        game: "20-20 Dragon Tiger",
        payout: "0.20x",
        profit_loss: "0.02400400",
      },
      { game: "Lucky 7 - B", payout: "0.20x", profit_loss: "-0.02400400" },
      { game: "32 Cards", payout: "0.20x", profit_loss: "0.02400400" },
      { game: "20-20 Teenpatti", payout: "0.20x", profit_loss: "-0.02400400" },
    ]);
  }, []);
  return (
    <>
      <div className="container betHistoryDiv">
        <AdvanceSearch />
        {columns.length ? (
          <CustomTable
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            keyField="game"
            pageSize={pageSize}
          />
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </>
  );
}

export default BetHistoryComponent;
