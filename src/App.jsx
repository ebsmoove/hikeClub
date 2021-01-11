import React, { useState } from "react";
import styled from "styled-components";
import { uiEnums } from "./enums";

import {
  Header,
  Instruction,
  TrailAttributesForm,
  TrailMap,
  TrailListing,
} from "./components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const FormAndTrailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding: 0px 10px 0px 10px;
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
    <Container>
      <FormAndTrailContainer>
        <Header />
        <TrailAttributesForm setTrails={setTrails} elementName="Form" />
        {trails ? (
          <TrailListing
            trails={trails}
            selectedTrailId={selectedTrailId}
            setSetSelectedTrailId={setSetSelectedTrailId}
          />
        ) : (
          <Instruction
            title={uiEnums.TRAIL_LISTING_INSTRUCTIONS_TITLE}
            subtitle={uiEnums.TRAIL_LISTING_INSTRUCTIONS_SUBTITLE}
          />
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
    </Container>
  );
}
