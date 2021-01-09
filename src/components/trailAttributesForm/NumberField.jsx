import { Field } from "formik";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const StyledField = styled(Field)`
  margin: 10px;
`;

const NumberField = ({ labelText, name }) => (
  <label htmlFor={name}>
    {labelText}
    <StyledField type="number" name={name} id={name} />
  </label>
);

NumberField.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default NumberField;
