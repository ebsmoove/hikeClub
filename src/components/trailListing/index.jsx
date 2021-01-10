import React, { useEffect } from "react";
import PropTypes from "prop-types";
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
const TrailListing = ({ trails, selectedTrailId, setSetSelectedTrailId }) => {
  useEffect(() => {
    if (!selectedTrailId) return;
    document
      .getElementById(selectedTrailId)
      .scrollIntoView({ block: "end", behavior: "smooth" });
  });

  return (
    <TrailListingContainer>
      {trails.map(({ attributes }) => (
        <li key={attributes.OGF_ID} id={attributes.OGF_ID}>
          <TrailCard
            selectedTrailId={selectedTrailId}
            setSetSelectedTrailId={setSetSelectedTrailId}
            {...attributes}
          />
        </li>
      ))}
    </TrailListingContainer>
  );
};

TrailListing.propTypes = {
  trails: PropTypes.array.isRequired,
  selectedTrailId: PropTypes.number,
  setSetSelectedTrailId: PropTypes.func.isRequired,
};

TrailListing.defaultProps = {
  selectedTrailId: null,
};
export default TrailListing;
