import "rc-slider/assets/index.css";

import * as React from "react";
import Slider from "rc-slider";
import { TRoute } from "../types";

const DragPlayer = ({
  route,
  currentPoint,
  onChange,
}: {
  route: TRoute;
  currentPoint: number;
  onChange: (i: number | number[]) => void;
}): React.JSX.Element => {
  const marks: Record<number, number> = {};
  route.forEach((_, i) => {
    if (i > 0 && i < route.length) marks[i] = i;
  });
  return (
    <div className="bg-white px-4 py-8 absolute bottom-0 z-[999999] w-full pl-72">
      <Slider
        dots
        step={1}
        min={0}
        max={route.length}
        value={currentPoint}
        onChange={onChange}
        dotStyle={{ borderColor: "gray" }}
        activeDotStyle={{ backgroundColor: "blue" }}
        marks={{
          ...marks,
          0: "Start",
          [route.length]: "End",
          [currentPoint]: <div className="font-bold text-blue-400">Here</div>,
        }}
      />
    </div>
  );
};
export default DragPlayer;
