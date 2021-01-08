import { trailAttritubeFormEnums } from "../enums";
const {
  OTC_TRAIL_CHALLENGE,
  MIN_LENGTH,
  MAX_LENGTH,
  ACTIVITY,
} = trailAttritubeFormEnums;

const whichWhereParam = (key, value) => {
  switch (key) {
    case OTC_TRAIL_CHALLENGE:
      return value ? `${OTC_TRAIL_CHALLENGE} = '${value}'` : "";
    case MIN_LENGTH:
      return value ? `${MIN_LENGTH} '${value}'` : "";
    case MAX_LENGTH:
      return value ? `${MAX_LENGTH} '${value}'` : "";
    case ACTIVITY:
      return value ? `${ACTIVITY} = '${value}'` : "";
    default:
      break;
  }
};
export const scrubWhereParams = (values) => {
  let params = [];
  Object.entries(values).forEach(([key, value]) => {
    return params.push(whichWhereParam(key, value));
  });
  const filteredParams = params.filter((param) => param);
  return filteredParams.join(" AND ");
};
