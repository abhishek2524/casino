import React from "react";
import Header from "../../components/common/Header/Header";
import DashboardComponent from "../../components/DashboardComponent/DashboardComponent";

function DashboardContainer() {
  return (
    <div className="d-flex flex-column">
      <Header />
      <DashboardComponent />
    </div>
  );
}

export default DashboardContainer;
