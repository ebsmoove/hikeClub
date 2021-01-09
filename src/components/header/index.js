import React from "React";
import styled from "styled-components";
import { H1 } from "../shared/typeography";

const HeaderContainer = styled.header`
  text-align: center;
  border: 2px solid black;
`;

const Header = () => (
  <HeaderContainer>
    <H1>Hike Club</H1>
  </HeaderContainer>
);
export default Header;
