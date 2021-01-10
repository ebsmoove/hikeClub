import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { TextField } from "formik-material-ui";
import RadioGroup from "./RadioGroup";
import SubmitButton from "./SubmitButton";
import { trailAttritubeFormEnums } from "../../enums";
import { api } from "../../services";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 15px;
  > * {
    margin: 10px;
  }
`;

const RadioGroups = styled.div`
  display: flex;
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
    {({ isSubmitting }) => (
      <StyledForm>
        <Field
          name={trailAttritubeFormEnums.MIN_LENGTH}
          label={trailAttritubeFormEnums.MIN_LENGTH_LABEL}
          type="number"
          component={TextField}
        />
        <Field
          name={trailAttritubeFormEnums.MAX_LENGTH}
          label={trailAttritubeFormEnums.MAX_LENGTH_LABEL}
          type="number"
          component={TextField}
        />
        <RadioGroups>
          <RadioGroup
            labelText={trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE_LABEL}
            name={trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE}
            values={trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE_VALUES}
            isSubmitting={isSubmitting}
          />
          <RadioGroup
            labelText={trailAttritubeFormEnums.ACTIVITY_LABEL}
            name={trailAttritubeFormEnums.ACTIVITY}
            values={trailAttritubeFormEnums.ACTIVITY_VALUES}
            isSubmitting={isSubmitting}
          />
        </RadioGroups>

        <SubmitButton type="submit" isSubmitting={isSubmitting} />
      </StyledForm>
    )}
  </Formik>
);

TrailAttributesForm.propTypes = {
  setTrails: PropTypes.func.isRequired,
};

export default TrailAttributesForm;
