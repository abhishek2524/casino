import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import DashboardComponent from "../../components/DashboardComponent/DashboardComponent";
import { fetchExpToken } from "./../../utils/Utils";
import { updateKeyObject } from "./../../reducers/localstorageSlice";

function DashboardContainer(props) {
  const { updateKeyObject } = props;
  const fetchToken = async () => {
    const res = await fetchExpToken();

    const { status, data } = res;
    if (status === 200) {
      updateKeyObject(data);
      return;
    }
    return;
  };
  useEffect(() => {
    fetchToken();
  }, []);
  return (
    <>
      <div className="d-flex flex-column bg-lightgray">
        <DashboardComponent />
      </div>
    </>
  );
}

const mapDispatchToProps = {
  updateKeyObject,
};

export default connect(null, mapDispatchToProps)(DashboardContainer);
