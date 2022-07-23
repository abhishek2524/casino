import React from "react";
import "./setButtonValue.scss";
function SetButtonValueComponent() {
  return (
    <div className="container setButtonValueDiv">
      <div className="row header">
        <div className="col-6"> Price Label</div>
        <div className="col-6"> Price Value</div>
      </div>
      <form className="valueForm">
        {new Array(3).fill(undefined).map((data, i) => (
          <div key={`key-${i}`} className="row inputRow">
            <div className="col-6">
              <input type="number" min="0" className="form-control" />
            </div>
            <div className="col-6">
              <input type="number" min="0" className="form-control" />
            </div>
          </div>
        ))}
        <div className="submitBtnDiv">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SetButtonValueComponent;
