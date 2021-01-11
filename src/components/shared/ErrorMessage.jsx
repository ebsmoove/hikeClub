import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ERR } from "./typeography";

const Container = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  padding: 3px;
`;

const ErrorMessage = ({ error }) => (
  <Container>
    <ERR>{error}</ERR>
  </Container>
);

ErrorMessage.propTypes = {
  error: PropTypes.string,
};
ErrorMessage.defaultProps = {
  error: "Uh oh, there is a generic error.",
};
export default ErrorMessage;
