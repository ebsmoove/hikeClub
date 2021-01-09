import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

const RadioGroup = ({ labelText, name, values }) => (
  <>
    <div id={labelText}>{labelText}</div>
    <div role="group" aria-labelledby={labelText}>
      {values.map((value) => (
        <label htmlFor={name} key={value}>
          <Field type="radio" id={name} name={name} value={value} />
          {value}
        </label>
      ))}
    </div>
  </>
);

RadioGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RadioGroup;
