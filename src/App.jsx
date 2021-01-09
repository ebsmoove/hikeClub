import React, { useState, useEffect } from "react";
import { api, mockApiResponse } from "./services";
import { uiEnums } from "./enums";
import {
  Header,
  Instruction,
  TrailAttributesForm,
  TrailMap,
  TrailListing,
} from "./components";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const FormAndTrailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const TrailMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export default function App() {
  const [trails, setTrails] = useState();

  const [selectedTrailId, setSetSelectedTrailId] = useState();

  return (
    <AppContainer>
      <GlobalStyle />
      <FormAndTrailContainer>
        <Header />
        <TrailAttributesForm setTrails={setTrails} />
        {trails ? (
          <TrailListing
            trails={trails}
            selectedTrailId={selectedTrailId}
            setSetSelectedTrailId={setSetSelectedTrailId}
          />
        ) : (
          <Instruction title={uiEnums.TRAIL_LISTING_INSTRUCTIONS_TITLE} />
        )}
      </FormAndTrailContainer>
      <TrailMapContainer>
        {trails ? (
          <TrailMap
            trails={trails}
            setSetSelectedTrailId={setSetSelectedTrailId}
            selectedTrailId={selectedTrailId}
          />
        ) : (
          <Instruction
            title={uiEnums.TRAIL_MAP_INSTRUCTIONS_TITLE}
            subtitle={uiEnums.TRAIL_MAP_INSTRUCTIONS_SUBTITLE}
          />
        )}
      </TrailMapContainer>
    </AppContainer>
  );
}
