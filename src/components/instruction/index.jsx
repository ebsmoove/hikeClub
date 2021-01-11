import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ST1, ST2 } from "../shared/typeography";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Instruction = ({ subtitle, title }) => (
  <Container>
    <ST1>{title}</ST1>
    {subtitle && <ST2>{subtitle}</ST2>}
  </Container>
);

Instruction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Instruction.defaultProps = {
  subtitle: "",
};

export default Instruction;
