import { TPosition } from "../types";
import ReactLeafletDriftMarker from "react-leaflet-drift-marker";
import { Popup } from "react-leaflet";
import { Icon } from "leaflet";

const DroneMarker = ({ coords }: { coords: TPosition | null }) => {
  const icon = new Icon({
    iconUrl:
      "https://cdn.icon-icons.com/icons2/1738/PNG/512/iconfinder-technologymachineelectronicdevice06-4026454_113332.png",
    iconRetinaUrl:
      "https://cdn.icon-icons.com/icons2/1738/PNG/512/iconfinder-technologymachineelectronicdevice06-4026454_113332.png",
    iconSize: [40, 40],
  });

  if (!coords) return null;

  const dt = new Date(coords.time);

  return (
    <ReactLeafletDriftMarker
      // if position changes, marker will drift its way to new position
      position={{
        lat: coords.latitude as number,
        lng: coords.longitude as number,
      }}
      // time in ms that marker will take to reach its destination
      duration={1000}
      icon={icon}>
      <Popup>
        <div>
          Drone here at {dt.toLocaleTimeString()} on {dt.toLocaleDateString()}
        </div>
      </Popup>
    </ReactLeafletDriftMarker>
  );
};

export default DroneMarker;
