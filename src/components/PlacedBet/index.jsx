import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPlacedBet } from "../../utils/Utils";
import CustomTable from "../common/CustomTable";
import { updatePlacedBet } from "./../../reducers/gameDataSlice";

function PlacedBet(props) {
  const { updatePlacedBet, placedBet } = props;
  const [columns, setColumns] = useState([]);
  const [defaultSorted, setDefaultSorted] = useState([]);
  const [data, setData] = useState([]);
  const pageSize = 5;
  const formatCell = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div
        className={
          cell.toLowerCase() === "won" ? "text-success" : "text-danger"
        }
      >
        {cell}
      </div>
    );
  };
  const formatPayload = (cell, row, rowIndex, formatExtraData) => {
    return (
      <div>
        <img src="/assets/icons/coins.svg" alt="" /> {cell}
      </div>
    );
  };
  const fetchBet = async () => {
    const res = await fetchPlacedBet();
    const { status, data } = res;
    if (status === 200) {
      updatePlacedBet({ data });
      return;
    }
    return;
  };
  useEffect(() => {
    if (!placedBet.count) {
      fetchBet();
    }
  }, []);
  useEffect(() => {
    setColumns([
      // { dataField: "id", text: "SL. No." },
      { dataField: "date", text: "Date", sort: true },
      { dataField: "gamePLayed", text: "Game", sort: true },
      {
        dataField: "gameAmount",
        text: "Payout",
        sort: true,
        formatter: formatPayload,
      },
      {
        dataField: "gameWinStatus",
        text: "Profit/ Loss",
        sort: true,
        formatter: formatCell,
      },
    ]);

    setDefaultSorted([
      {
        dataField: "id",
        order: "desc",
      },
    ]);
    // setData([
    //   {
    //     gamePLayed: "Card_Type",
    //     gameAmount: "500",
    //     gameWinStatus: "loss",
    //   },
    //   {
    //     gamePLayed: "Card_Type",
    //     gameAmount: "300",
    //     gameWinStatus: "loss",
    //   },
    //   {
    //     gamePLayed: "Card_Type",
    //     gameAmount: "200",
    //     gameWinStatus: "loss",
    //   },
    //   {
    //     gamePLayed: "Card_Type",
    //     gameAmount: "400",
    //     gameWinStatus: "loss",
    //   },
    //   {
    //     gamePLayed: "Card_Type",
    //     gameAmount: "500",
    //     gameWinStatus: "loss",
    //   },
    //   {
    //     gamePLayed: "Card_Type",
    //     gameAmount: "600",
    //     gameWinStatus: "loss",
    //   },
    // ]);
    setData(placedBet.data);
    return () => setData([]);
  }, [placedBet]);

  return (
    <>
      <div className="container betHistoryDiv">
        {columns.length ? (
          <CustomTable
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            keyField="id"
            pageSize={pageSize}
          />
        ) : (
          <h1>No data</h1>
        )}
      </div>
    </>
  );
}

const mapStateToProps = ({ gamesData }) => ({
  placedBet: gamesData.placedBet,
});
const mapDispatchToProps = {
  updatePlacedBet,
};
export default connect(mapStateToProps, mapDispatchToProps)(PlacedBet);
