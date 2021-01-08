const mockApiResponse = {
  displayFieldName: "TRAIL_NAME",
  fieldAliases: {
    TRAIL_NAME: "TRAIL_NAME",
    OGF_ID: "OGF_ID",
    LENGTH_KMS: "LENGTH_KMS",
    LOCATION_DESCR: "LOCATION_DESCR",
    OTC_TRAIL_CHALLENGE: "OTC_TRAIL_CHALLENGE",
    ACTIVITY: "ACTIVITY",
  },
  geometryType: "esriGeometryPoint",
  spatialReference: { wkid: 4326, latestWkid: 4326 },
  fields: [
    {
      name: "TRAIL_NAME",
      type: "esriFieldTypeString",
      alias: "TRAIL_NAME",
      length: 200,
    },
    { name: "OGF_ID", type: "esriFieldTypeDouble", alias: "OGF_ID" },
    { name: "LENGTH_KMS", type: "esriFieldTypeSingle", alias: "LENGTH_KMS" },
    {
      name: "LOCATION_DESCR",
      type: "esriFieldTypeString",
      alias: "LOCATION_DESCR",
      length: 2000,
    },
    {
      name: "OTC_TRAIL_CHALLENGE",
      type: "esriFieldTypeString",
      alias: "OTC_TRAIL_CHALLENGE",
      length: 25,
    },
    {
      name: "ACTIVITY",
      type: "esriFieldTypeString",
      alias: "ACTIVITY",
      length: 25,
    },
  ],
  features: [
    {
      attributes: {
        TRAIL_NAME: "Duffin's Creek Trail",
        OGF_ID: 302005251,
        LENGTH_KMS: 20.0,
        LOCATION_DESCR: null,
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -79.071302002944208, y: 43.865505236707016 },
    },
    {
      attributes: {
        TRAIL_NAME: "Bruce County Rail Trail",
        OGF_ID: 302005934,
        LENGTH_KMS: 81.5,
        LOCATION_DESCR: null,
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -81.557863037383427, y: 44.324530395430699 },
    },
    {
      attributes: {
        TRAIL_NAME: "Haliburton County Rail Trail",
        OGF_ID: 302006052,
        LENGTH_KMS: 35.0,
        LOCATION_DESCR: null,
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -78.519461531343097, y: 45.04315326523254 },
    },
    {
      attributes: {
        TRAIL_NAME: "Centennial Park to Black Lake Road",
        OGF_ID: 302002104,
        LENGTH_KMS: 11.6,
        LOCATION_DESCR: null,
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -81.279819064003775, y: 46.389948749548722 },
    },
    {
      attributes: {
        TRAIL_NAME: "Orillia Trail",
        OGF_ID: 302002216,
        LENGTH_KMS: 15.0,
        LOCATION_DESCR: null,
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -79.408990482061952, y: 44.644489755488777 },
    },
    {
      attributes: {
        TRAIL_NAME: "Victoria Rail Trail, South Corridor",
        OGF_ID: 302002621,
        LENGTH_KMS: 25.2,
        LOCATION_DESCR: null,
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -78.733232238049979, y: 44.357642237899192 },
    },
    {
      attributes: {
        TRAIL_NAME: "Welland Canal Parkway East Side Trail",
        OGF_ID: 302006285,
        LENGTH_KMS: 20.0,
        LOCATION_DESCR:
          "This section of the Welland Canals Parkway Trail, which is part of a network of trails, is unique in Niagara Region. It accommodates many outdoor enthusiasts on parallel but divided trails, including: equestrians, off-road motorcycles, hikers, mountain bikers, snowmobilers and cross country skiers. The East Side Canal Trail sits on a leased parcel of land on the east side of the Welland Canal.",
        OTC_TRAIL_CHALLENGE: "Moderate",
        ACTIVITY: "Both",
      },
      geometry: { x: -79.210929275320893, y: 43.027814482090363 },
    },
  ],
};
export default mockApiResponse;
