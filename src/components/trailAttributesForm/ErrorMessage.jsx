import React from "react";
import PropTypes from "prop-types";
import { ERR } from "../shared/typeography";
import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  padding: 3px;
`;

const ErrorMessage = ({ error }) => (
  <ErrorMessageContainer>
    <ERR>{error}</ERR>
  </ErrorMessageContainer>
);

ErrorMessage.propTypes = {
  error: PropTypes.string,
};
ErrorMessage.defaultProps = {
  error: "Uh oh, there is a generic error.",
};
export default ErrorMessage;
