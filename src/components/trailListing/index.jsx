import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TrailCard from "./TrailCard";
import { ST1 } from "../shared/typeography";

const TrailListingContainer = styled.ul`
  display: flex;
  height: 100%;

  overflow: scroll;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

const LI = styled.li`
  margin: 15px 10px 15px 10px;
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
      <ST1>Your search has returned {trails.length} results!</ST1>
      {trails.map(({ attributes }) => (
        <LI key={attributes.OGF_ID} id={attributes.OGF_ID}>
          <TrailCard
            selectedTrailId={selectedTrailId}
            setSetSelectedTrailId={setSetSelectedTrailId}
            {...attributes}
          />
        </LI>
      ))}
    </TrailListingContainer>
  );
};

TrailListing.propTypes = {
  trails: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.object.isRequired,
      geometry: PropTypes.object.isRequired,
    })
  ).isRequired,
  selectedTrailId: PropTypes.number,
  setSetSelectedTrailId: PropTypes.func.isRequired,
};

TrailListing.defaultProps = {
  selectedTrailId: null,
};
export default TrailListing;
