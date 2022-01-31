import React, { Component, useState } from "react";
import makeAnimated from "react-select/animated";
import { components } from "react-select";
import MySelect from "./MySelect";
const Option = props => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const MultiValue = props => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);

const animatedComponents = makeAnimated();

export default function OptionDropdown({ GenreOptions }) {
  const [optionSelected, setOptionSelected] = useState();

  return (
    <MySelect
      options={GenreOptions}
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{ Option, MultiValue, animatedComponents }}
      onChange={setOptionSelected}
      allowSelectAll={true}
      value={optionSelected}
    />
  );
}
