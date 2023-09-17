import { useEffect } from "react";
import { TPosition, TRoute } from "../types";
import { Polyline, useMap } from "react-leaflet";
import { latLngBounds } from "leaflet";

export const ShowRoutes = ({ route }: { route: TRoute }) => {
  const map = useMap();

  useEffect(() => {
    const routerBound = latLngBounds([]);
    route.forEach((r: TPosition) =>
      routerBound.extend([r.latitude as number, r.longitude as number])
    );
    if (routerBound.isValid()) {
      map.fitBounds(routerBound);
    }
  }, [map, route]);

  return (
    <Polyline
      positions={route.map((pos) => [pos.latitude, pos.longitude]) as never}
      pathOptions={{ color: "blue" }}
      lineCap="round"
      lineJoin="round"
      weight={6}
      stroke
    />
  );
};
