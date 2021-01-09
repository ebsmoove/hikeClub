import React from "React";
import styled from "styled-components";
import { uiEnums } from "../../enums";
import { H1 } from "../shared/typeography";

const HeaderContainer = styled.header`
  text-align: center;
  border: 2px solid black;
`;

const Header = () => (
  <HeaderContainer>
    <H1>{uiEnums.HEADER_TITLE}</H1>
  </HeaderContainer>
);
export default Header;
