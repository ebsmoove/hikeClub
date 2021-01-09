import { Field } from "formik";
import styled from "styled-components";
import React from "react";

const StyledField = styled(Field)`
  margin: 10px;
`;

const NumberField = ({ labelText, name }) => (
  <label>
    {labelText}
    <StyledField type="number" name={name} />
  </label>
);

export default NumberField;
