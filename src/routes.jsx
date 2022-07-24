import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import DragonTigerGame from "./components/GameComponent/DragonTigerGame";
import PlacedBet from "./components/PlacedBet";
import BetHistoryContainer from "./containers/BetHistoryContainer";
import ChangePasswordContainer from "./containers/ChangePasswordContainer";
import DashboardContainer from "./containers/DashboardContainer";
import GameContainer from "./containers/GameContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfitLossContainer from "./containers/ProfitLossContainer";
import SetButtonValueContainer from "./containers/SetButtonValueContainer";
import TransactionHistoryContainer from "./containers/TransactionHistoryContainer/TransactionHistoryContainer";
import UnSettledConatiner from "./containers/UnSettledContainer";
const Contact = () => <h1>Contact</h1>;
function Routing() {
  const isLogin = window.sessionStorage.getItem("login");
  return (
    <Routes>
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/" /> : <LoginContainer />}
      />
      <Route path="/" element={isLogin ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/betHistory" element={<BetHistoryContainer />} />
        <Route
          path="/transactionHistory"
          element={<TransactionHistoryContainer />}
        />
        <Route path="/profitLoss" element={<ProfitLossContainer />} />
        <Route path="/unSettledBet" element={<UnSettledConatiner />} />
        <Route path="/setButtonValue" element={<SetButtonValueContainer />} />
        <Route path="/changePassword" element={<ChangePasswordContainer />} />
        <Route path="/game" element={<GameContainer />}>
          <Route path=":gameName" element={<DragonTigerGame />} />
          <Route path=":gameName/placeBet" element={<PlacedBet />} />
          <Route index element={<DragonTigerGame />} />
        </Route>
        <Route index element={<DashboardContainer />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing;
