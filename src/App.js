import React, { useState, useEffect } from "react";
import { api, mockApiResponse } from "./services/";
import { TrailAttributesForm, TrailMap, TrailListing } from "./components";
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
  const [trails, setTrails] = useState([]);

  const [selectedTrailId, setSetSelectedTrailId] = useState();

  const onSubmit = async (values) => {
    const getLioMapServerResponse = await api.getLioMapServer(values);
    setTrails(getLioMapServerResponse);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <FormAndTrailContainer>
        <TrailAttributesForm onSubmit={onSubmit} />
        <TrailListing
          trails={trails}
          selectedTrailId={selectedTrailId}
          setSetSelectedTrailId={setSetSelectedTrailId}
        />
      </FormAndTrailContainer>
      <TrailMapContainer>
        {trails ? (
          <TrailMap
            trails={trails}
            setSetSelectedTrailId={setSetSelectedTrailId}
            selectedTrailId={selectedTrailId}
          />
        ) : (
          <h1>Map is chilling</h1>
        )}
      </TrailMapContainer>
    </AppContainer>
  );
}
