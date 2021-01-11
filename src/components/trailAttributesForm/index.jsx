import React from "react";
import { Formik, Form, Field } from "formik";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TextField } from "formik-material-ui";
import VisibilityToggleWrapper from "../shared/VisibilityToggleWrapper";
import RadioGroup from "./RadioGroup";
import ErrorMessage from "./ErrorMessage";
import SubmitButton from "./SubmitButton";
import { trailAttritubeFormEnums } from "../../enums";
import { api } from "../../services";

const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 15px;
    > * {
      margin: 10px;
    }
  }
`;

const RadioGroups = styled.div`
  display: flex;
`;

const TrailAttributesForm = ({ setTrails }) => (
  <Container>
    <Formik
      initialValues={{
        [trailAttritubeFormEnums.MIN_LENGTH]: 10,
        [trailAttritubeFormEnums.MAX_LENGTH]: 100,
        [trailAttritubeFormEnums.OTC_TRAIL_CHALLENGE]: "Challenging",
        [trailAttritubeFormEnums.ACTIVITY]: "Both",
      }}
      onSubmit={async (values, { setStatus }) => {
        try {
          const getLioMapServerResponse = await api.getLioMapServer(values);
          setTrails(getLioMapServerResponse);
        } catch (error) {
          setStatus({
            api: "There is an error with the api. Please try later.",
          });
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
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
          {status && status.api && (
            <ErrorMessage error="There is a problem with the API, please try again later." />
          )}
          <SubmitButton type="submit" isSubmitting={isSubmitting} />
        </Form>
      )}
    </Formik>
  </Container>
);

TrailAttributesForm.propTypes = {
  setTrails: PropTypes.func.isRequired,
};

export default VisibilityToggleWrapper(TrailAttributesForm);
