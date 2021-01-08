import React from "react";
import { Field } from "formik";
import styled from "styled-components";

const RadioGroup = ({ labelText, name, values }) => (
  <>
    <div id={labelText}>{labelText}</div>
    <div role="group" aria-labelledby={labelText}>
      {values.map((value) => (
        <label key={value}>
          <Field type="radio" name={name} value={value} />
          {value}
        </label>
      ))}
    </div>
  </>
);

export default RadioGroup;
