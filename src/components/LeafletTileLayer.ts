/* eslint import/no-webpack-loader-syntax: off */

import L from "leaflet";
import PropTypes from "prop-types";
import { GridLayer, withLeaflet } from "react-leaflet";
import "mapbox-gl-leaflet";

class MapBoxGLLayer extends GridLayer {
  createLeafletElement(props) {
    return L.mapboxGL(props);
  }

  componentDidUpdate(prevProps) {
    this.leafletElement.getMapboxMap().setStyle(this.props.style);
  }
}

/*
 * Props are the options supported by Mapbox Map object
 * Find options here:https://www.mapbox.com/mapbox-gl-js/api/#new-mapboxgl-map-options-
 */
MapBoxGLLayer.propTypes = {
  accessToken: PropTypes.string.isRequired,
  style: PropTypes.string,
};

MapBoxGLLayer.defaultProps = {
  style: "mapbox://styles/mapbox/streets-v9",
};

export default withLeaflet(MapBoxGLLayer);
