import React, { useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "./advanceSearch.scss";

function AdvanceSearch(props) {
  const {
    isSelectSearch = false,
    selectOptions = [],
    onChange,
    value = { value: "", label: "" },
  } = props;
  const customStyle = {
    control: () => ({
      width: "100%",
      height: "100%",
      border: "1px solid #d1d1d1",
      display: "flex",
      borderRadius: "12px",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };
  const SelectComponent = () => (
    <Select
      className="customSelect"
      placeholder="Select Game"
      styles={customStyle}
      options={selectOptions}
      name="select"
      value={value}
      onChange={onChange}
    />
  );
  return (
    <div className="advanceSearch">
      <div className="customDates d-flex w-100">
        <div className="w-100 startDate position-relative">
          <ReactDatePicker
            className="input"
            placeholderText="Select date"
            onChange={(e) => console.log(e)}
            selected={new Date()}
            showPopperArrow={false}
            name="startDate"
            popperPlacement="bottom-right"
            popperClassName="customPopper"
          />
          <img src="/assets/icons/cal.svg" className="calDiv" alt="cal" />
        </div>
        {!isSelectSearch && (
          <div className="w-100 endDate position-relative">
            <ReactDatePicker
              className="input "
              placeholderText="Select date"
              onChange={(e) => console.log(e)}
              selected={new Date()}
              showPopperArrow={false}
              name="endDate"
              popperPlacement="bottom-left"
              popperClassName="customPopper"
            />
            <img src="/assets/icons/cal.svg" className="calDiv" alt="cal" />
          </div>
        )}
        {isSelectSearch && (
          <div className="w-100 endDate position-relative">
            <SelectComponent />
          </div>
        )}
      </div>
      <div className="searchBtn">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
}

export default AdvanceSearch;
