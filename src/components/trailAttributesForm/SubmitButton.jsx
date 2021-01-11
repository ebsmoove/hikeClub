import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BUTT1 } from "../shared/typeography";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSubmitting }) => (isSubmitting ? "black" : "white")};
  color: ${({ isSubmitting }) => (isSubmitting ? "white" : "black")};
  min-width: 50px;
  height: 36px;
  padding-left: 16px;
  padding-right: 16px;
  div {
    margin-right: 10px;
  }
`;

const Spinner = styled.div`
  /* adapted from https://github.com/buzinas/tiny-spinner/blob/master/spinner.css */
  width: 12px;
  height: 12px;
  border: 2px solid white;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
const SubmitButton = ({ isSubmitting }) => (
  <Button isSubmitting={isSubmitting}>
    {isSubmitting ? (
      <>
        <Spinner /> <BUTT1>Submitting</BUTT1>
      </>
    ) : (
      <BUTT1>Submit</BUTT1>
    )}
  </Button>
);

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
};

export default SubmitButton;
