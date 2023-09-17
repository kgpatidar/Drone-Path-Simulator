import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ children }: { children: React.ReactElement }) => {
  const mapRef = useRef(null);
  const [zoom] = useState(13);

  return (
    <>
      <MapContainer
        center={[-26.805002906760933, 115.36848390332193]}
        zoom={zoom}
        scrollWheelZoom={true}
        className={`h-full w-full z-0 relative`}
        zoomControl={false}
        maxZoom={21}
        minZoom={2}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        ref={mapRef}
        preferCanvas={true}>
        <TileLayer
          attribution="Google Maps"
          url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
        <>{children}</>
      </MapContainer>
    </>
  );
};

export default Map;
