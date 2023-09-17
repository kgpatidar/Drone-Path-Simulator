import React from "react";
import { TRoute } from "../types";
import AddNewRoute from "./AddNewRoute";
import ImportNewRoute from "./ImportNewRoute";
import { AiFillPlayCircle } from "react-icons/ai";

const Sidebar = ({
  routes,
  setRoutes,
  selectedRoutes,
  setSelectedRoutes,
  playRoute,
}: {
  routes: TRoute[];
  selectedRoutes: number[];
  setRoutes: (_routes: TRoute[]) => void;
  setSelectedRoutes: (_selected: number[]) => void;
  playRoute: () => void;
}): React.JSX.Element => {
  return (
    <aside
      className={`relative sidebar md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 bg-white border-r border-gray-200 overflow-hidden w-64`}>
      <div className="flex items-center justify-center py-4 px-4">
        <h1 className="flex items-center tracking-wider font-bold text-blue-700 text-sm xl:text-base ">
          DR
          <img
            src="https://svgsilh.com/svg/2025680.svg"
            className="w-2.5 h-2.5 animate-spin duration-1000"
          />
          NE SIMULATE
        </h1>
      </div>
      <div className="sidebar-content px-4 pb-6">
        <ul className="flex flex-col space-y-3 w-full text-sm text-center">
          <li className="bg-gray-100 p-2 rounded-md">
            <AddNewRoute
              onAdd={(_route: TRoute) => setRoutes([...routes, _route])}
            />
          </li>
          <li className="bg-gray-100 p-2 rounded-md">
            <ImportNewRoute
              onAdd={(_route: TRoute) => {
                setRoutes([...routes, _route]);
              }}
            />
          </li>
          <li className="bg-blue-50 text-blue-500 p-2 rounded-md font-semibold">
            Drone Routes
          </li>
          <div className="flex flex-col">
            {routes.length === 0 ? (
              <div className="text-sm text-gray-400">No Routes</div>
            ) : (
              routes.map((_, index: number) => {
                const isSelected =
                  selectedRoutes.findIndex(
                    (_selected) => _selected === index
                  ) >= 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between relative text-left text-sm py-2 px-5 border-b  ${
                      isSelected
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-200 cursor-pointer"
                    }`}
                    onClick={() => {
                      if (!isSelected) setSelectedRoutes([index]);
                    }}>
                    Route {index + 1}{" "}
                    <span
                      onClick={playRoute}
                      className="text-lg hover:scale-105 cursor-pointer">
                      <AiFillPlayCircle />
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
