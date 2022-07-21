import { Routes, Route } from "react-router-dom";
import DashboardContainer from "./containers/DashboardContainer";
import LoginContainer from "./containers/LoginContainer";
const Contact = () => <h1>Contact</h1>;
function Routing() {
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/" element={<DashboardContainer />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing;
