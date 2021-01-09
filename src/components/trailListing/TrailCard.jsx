import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ST1, ST2, B1 } from "../shared/typeography";
const unSelectedBoxShadow =
  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)";
const selecetedBoxShaodw =
  " 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);";
const TrailCardContainer = styled.div`
  box-shadow: ${({ selectedTrailId }) =>
    selectedTrailId ? selecetedBoxShaodw : unSelectedBoxShadow};
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 16px;

  :hover {
    box-shadow: ;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TrailCard = ({
  OGF_ID,
  selectedTrailId,
  ACTIVITY,
  TRAIL_NAME,
  LENGTH_KMS,
  OTC_TRAIL_CHALLENGE,
  LOCATION_DESCR,
}) => (
  <TrailCardContainer selectedTrailId={OGF_ID === selectedTrailId}>
    <ST1>{TRAIL_NAME}</ST1>
    <TitleContainer>
      <ST2>Diffculty: {OTC_TRAIL_CHALLENGE}</ST2>
      <ST2>Activity: {ACTIVITY}</ST2>
      <ST2>{LENGTH_KMS} km&aposs</ST2>
    </TitleContainer>
    <B1>{LOCATION_DESCR}</B1>
  </TrailCardContainer>
);

TrailCard.propTypes = {
  OGF_ID: PropTypes.string.isRequired,
  selectedTrailId: PropTypes.number.isRequired,
  ACTIVITY: PropTypes.string.isRequired,
  TRAIL_NAME: PropTypes.string.isRequired,
  LENGTH_KMS: PropTypes.string.isRequired,
  OTC_TRAIL_CHALLENGE: PropTypes.string.isRequired,
  LOCATION_DESCR: PropTypes.string.isRequired,
};

export default TrailCard;
