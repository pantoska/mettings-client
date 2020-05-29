import { Map as LeafletMap, Popup, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { compose } from "recompose";
import { connect } from "react-redux";
import { getMarkers } from "../../core/redux/map/markerAction";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "block",
      width: "800px",
      height: "500px",
      margin: "5% auto",
      "& > *": {
        width: "100%",
        height: "100%",
      },
    },
  }),
  {
    name: "Map",
  }
);

const mapStateToProps = (state) => ({
  allMarkers: state.markers.allMarkers,
});

const mapDispatchToProps = {
  getMarkers,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

const Map = ({ getMarkers, allMarkers }) => {
  const classes = useStyles();

  useEffect(() => {
    getMarkers();
  }, [getMarkers]);

  allMarkers.map((el) => console.log(el));
  return (
    <div className={classes.root}>
      <LeafletMap center={[50.05, 19.95]} zoom={13}>
        <TileLayer
          url={`https://1.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/512/png8?apiKey=${process.env.REACT_APP_HEREMAPS_API_KEY}`}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {allMarkers.map((el) => (
          <Marker key={el.id} position={[el.longitude, el.latitude]}>
            <Popup>{el.description}</Popup>
          </Marker>
        ))}
      </LeafletMap>
    </div>
  );
};

export default enhance(Map);
