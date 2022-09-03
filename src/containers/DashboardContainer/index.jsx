import React from "react";
import DashboardComponent from "../../components/DashboardComponent/DashboardComponent";

function DashboardContainer() {
  return (
    <>
      <div className="d-flex flex-column bg-lightgray">
        <DashboardComponent />
      </div>
    </>
  );
}

export default DashboardContainer;
