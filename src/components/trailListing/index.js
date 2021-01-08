import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TrailCard from "./TrailCard";

const TrailListingContainer = styled.ul`
  display: flex;
  height: 100%;

  overflow: scroll;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  > * {
    margin: 15px 10px 15px 10px;
  }
`;
export default function TrailListing({
  trails,
  selectedTrailId,
  setSetSelectedTrailId,
}) {
  useEffect(() => {
    if (!selectedTrailId) return;
    document
      .getElementById(selectedTrailId)
      .scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <TrailListingContainer>
      {trails.map(({ attributes }, i) => (
        <li
          key={attributes.OGF_ID}
          id={attributes.OGF_ID}
          onClick={() => {
            setSetSelectedTrailId(attributes.OGF_ID);
          }}
        >
          <TrailCard selectedTrail={selectedTrailId} {...attributes} />
        </li>
      ))}
    </TrailListingContainer>
  );
}
