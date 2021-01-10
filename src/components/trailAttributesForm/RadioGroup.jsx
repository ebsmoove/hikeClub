import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { FormControlLabel, Radio, FormLabel } from "@material-ui/core";
import { RadioGroup as MaterialRadioGroup } from "formik-material-ui";

const RadioGroup = ({ labelText, name, values, isSubmitting }) => (
  <Field component={MaterialRadioGroup} id={name} name={name}>
    <FormLabel htmlFor={name}>{labelText}</FormLabel>
    {values.map((value) => (
      <FormControlLabel
        value={value}
        key={value}
        control={<Radio />}
        label={value}
      />
    ))}
    <FormControlLabel value="" control={<Radio />} label="I don't care" />
  </Field>
);

RadioGroup.propTypes = {
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default RadioGroup;
