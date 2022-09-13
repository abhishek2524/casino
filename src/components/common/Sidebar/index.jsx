import React from "react";
import BottomSidebar from "./BottomSidebar";
import "./sidebar.scss";
import TopSidebar from "./TopSidebar";
function Sidebar(props) {
  const { toggleSideBar = () => {} } = props;
  return (
    <div className="sidebarDiv">
      <div className="closeArrow">
        <img
          src="/assets/icons/white-close-icon.svg"
          role="button"
          onClick={toggleSideBar}
          alt=""
        />
      </div>
      <div>
        <TopSidebar handleBetPlacedSocket={props.handleBetPlacedSocket} />
        <BottomSidebar toggleSideBar={toggleSideBar} />
      </div>
    </div>
  );
}

export default Sidebar;
