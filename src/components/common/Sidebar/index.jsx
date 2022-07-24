import React from "react";
import BottomSidebar from "./BottomSidebar";
import "./sidebar.scss";
import TopSidebar from "./TopSidebar";
function Sidebar() {
  return (
    <div className="sidebarDiv">
      <div>
        <TopSidebar />
        <hr />
        <BottomSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
