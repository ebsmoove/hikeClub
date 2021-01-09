import { Formik, Form } from "formik";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import RadioGroup from "./RadioGroup";
import NumberField from "./NumberField";
import { trailAttritubeFormEnums } from "../../enums";
import { api } from "../../services";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const TrailAttributesForm = ({ setTrails }) => (
  <Formik
    initialValues={{
      [trailAttritubeFormEnums.MIN_LENGTH]: 10,
      [trailAttritubeFormEnums.MAX_LENGTH]: 100,
      [trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE]: "Challenging",
      [trailAttritubeFormEnums.ACTIVITY]: "Both",
    }}
    onSubmit={async (values) => {
      const getLioMapServerResponse = await api.getLioMapServer(values);
      setTrails(getLioMapServerResponse);
    }}
  >
    {() => (
      <StyledForm>
        <NumberField
          name={trailAttritubeFormEnums.MIN_LENGTH}
          labelText={trailAttritubeFormEnums.MIN_LENGTH_LABEL}
        />
        <NumberField
          name={trailAttritubeFormEnums.MAX_LENGTH}
          labelText={trailAttritubeFormEnums.MAX_LENGTH_LABEL}
        />

        <RadioGroup
          labelText={trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE_LABEL}
          name={trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE}
          values={trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE_VALUES}
        />
        <RadioGroup
          labelText={trailAttritubeFormEnums.ACTIVITY_LABEL}
          name={trailAttritubeFormEnums.ACTIVITY}
          values={trailAttritubeFormEnums.ACTIVITY_VALUES}
        />
        <button type="submit">Submit</button>
      </StyledForm>
    )}
  </Formik>
);

TrailAttributesForm.propTypes = {
  setTrails: PropTypes.func.isRequired,
};

export default TrailAttributesForm;
