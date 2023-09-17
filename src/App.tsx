import { useEffect, useState } from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import { TRoute } from "./types";
import DroneMarker from "./components/DroneMarker";
import { DEMO_ROUTE_2, DEMO_ROUTE_1 } from "./route";
import { ShowRoutes } from "./components/ShowRoutes";
import DragPlayer from "./components/DragPlayer";
let interval: undefined | NodeJS.Timeout = undefined;

function App() {
  const [routes, setRoutes] = useState<TRoute[]>([
    DEMO_ROUTE_1 as [],
    DEMO_ROUTE_2 as [],
  ]);
  const [selectedRoutes, setSelectedRoutes] = useState<number[]>([1]);
  const [currentPoint, setCurrentPoint] = useState<number>(0);

  const playRoute = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setCurrentPoint((cp) =>
        cp >= routes[selectedRoutes[0]].length ? cp : cp + 1
      );
    }, 1500);
    return interval;
  };

  useEffect(() => {
    clearInterval(interval);
    playRoute();
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoutes]);

  return (
    <>
      <div className="w-screen h-screen relative flex">
        <div className="w-64">
          <Sidebar
            routes={routes}
            setRoutes={setRoutes}
            selectedRoutes={selectedRoutes}
            setSelectedRoutes={setSelectedRoutes}
            playRoute={playRoute}
          />
        </div>
        <>
          <Map>
            <>
              <ShowRoutes route={routes[selectedRoutes[0]]} />
              <DroneMarker coords={routes[selectedRoutes[0]][currentPoint]} />
            </>
          </Map>
          <DragPlayer
            route={routes[selectedRoutes[0]]}
            currentPoint={currentPoint}
            onChange={(i) => {
              clearInterval(interval);
              setCurrentPoint(i as number);
            }}
          />
        </>
      </div>
    </>
  );
}

export default App;
