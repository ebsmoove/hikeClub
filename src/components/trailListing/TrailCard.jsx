import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ST1, ST2, B1, BUTT1 } from "../shared/typeography";
const unSelectedBoxShadow =
  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)";
const selecetedBoxShaodw =
  " 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);";

const Container = styled.div`
  box-shadow: ${({ selected }) =>
    selected ? selecetedBoxShaodw : unSelectedBoxShadow};
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

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "black" : "white")};
  color: ${({ selected }) => (selected ? "white" : "black")};
`;

const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TrailCard = ({
  selectedTrailId,
  setSetSelectedTrailId,
  OGF_ID,
  ACTIVITY,
  TRAIL_NAME,
  LENGTH_KMS,
  OTC_TRAIL_CHALLENGE,
  LOCATION_DESCR,
}) => (
  <Container selected={OGF_ID === selectedTrailId}>
    <TitleContainer>
      <ST1>{TRAIL_NAME}</ST1>
      <Button
        onClick={() => setSetSelectedTrailId(OGF_ID)}
        selected={OGF_ID === selectedTrailId}
      >
        <BUTT1>{OGF_ID === selectedTrailId ? "Selected" : "Select"}</BUTT1>
      </Button>
    </TitleContainer>
    <SubtitleContainer>
      <ST2>Diffculty: {OTC_TRAIL_CHALLENGE}</ST2>
      <ST2>Activity: {ACTIVITY}</ST2>
      <ST2>Length: {LENGTH_KMS} km&apos;s</ST2>
    </SubtitleContainer>
    <B1>{LOCATION_DESCR}</B1>
  </Container>
);

TrailCard.propTypes = {
  setSetSelectedTrailId: PropTypes.func.isRequired,
  selectedTrailId: PropTypes.number,
  OGF_ID: PropTypes.number.isRequired,
  ACTIVITY: PropTypes.string.isRequired,
  TRAIL_NAME: PropTypes.string.isRequired,
  LENGTH_KMS: PropTypes.number.isRequired,
  OTC_TRAIL_CHALLENGE: PropTypes.string.isRequired,
  LOCATION_DESCR: PropTypes.string,
};

TrailCard.defaultProps = {
  LOCATION_DESCR: "",
  selectedTrailId: null,
};
export default TrailCard;
