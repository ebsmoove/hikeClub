import axios from "axios";
import { scrubWhereParams } from "./lioMapServerParamScrubbers";

const getLioMapServer = async (values) => {
  try {
    const response = await axios.get(
      "https://ws.lioservices.lrc.gov.on.ca/arcgis1071a/rest/services/LIO_OPEN_DATA/LIO_Open04/MapServer/20/query",
      {
        params: {
          where: scrubWhereParams(values),
          outfields:
            "TRAIL_NAME,OGF_ID,LENGTH_KMS,LOCATION_DESCR,OTC_TRAIL_CHALLENGE,ACTIVITY",
          outSR: 4326,
          f: "json",
        },
      }
    );

    return response.data.features;
  } catch (err) {
    return err;
  }
};
const api = {
  getLioMapServer,
};

export default api;
