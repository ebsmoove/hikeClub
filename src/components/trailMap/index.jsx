import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import PropTypes from "prop-types";
import ErrorMessage from "../shared/ErrorMessage";

const containerStyle = {
  height: "100vh",
  width: "100%",
};

const center = {
  lat: 43.40583700366873,
  lng: -80.65674895775985,
};

function TrailMap({ trails, setSetSelectedTrailId, selectedTrailId }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  const unSelectedTrailIcon =
    "http://maps.google.com/mapfiles/kml/pal2/icon12.png";
  const selectedTrailIcon =
    "http://maps.google.com/mapfiles/kml/pal2/icon4.png";
  return isLoaded ? (
    <section>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {trails.map((trail) => (
          <Marker
            key={trail.geometry.y}
            position={{ lat: trail.geometry.y, lng: trail.geometry.x }}
            title={trail.attributes.TRAIL_NAME}
            icon={
              trail.attributes.OGF_ID === selectedTrailId
                ? selectedTrailIcon
                : unSelectedTrailIcon
            }
            onClick={() => setSetSelectedTrailId(trail.attributes.OGF_ID)}
          />
        ))}
      </GoogleMap>
    </section>
  ) : (
    <ErrorMessage error="Should be a map here..., please try again later...." />
  );
}
TrailMap.propTypes = {
  trails: PropTypes.array.isRequired,
  selectedTrailId: PropTypes.number,
  setSetSelectedTrailId: PropTypes.func.isRequired,
};

TrailMap.defaultProps = {
  selectedTrailId: null,
};
export default React.memo(TrailMap);
