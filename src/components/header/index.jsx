import React from "react";
import styled from "styled-components";
import { uiEnums } from "../../enums";
import { H1 } from "../shared/typeography";

const Container = styled.header`
  text-align: center;
  border: 2px solid black;
`;

const Header = () => (
  <Container>
    <H1>{uiEnums.HEADER_TITLE}</H1>
  </Container>
);
export default Header;
