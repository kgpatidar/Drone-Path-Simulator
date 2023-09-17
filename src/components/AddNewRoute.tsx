import { useState } from "react";
import { TRoute } from "../types";

const AddNewRoute = ({ onAdd }: { onAdd: (v: TRoute) => void }) => {
  const [modal, setModal] = useState(false);
  const [route, setRoute] = useState<string>("");

  const handleAdd = () => {
    const fRoute = route.split("\n");
    const _route: TRoute = fRoute
      .map((_fRoute) => {
        const [latitude, longitude, time] = _fRoute.split(",");
        return { latitude, longitude, time };
      })
      .filter((item) => item.latitude && item.longitude && item.time);
    _route.length > 0 && onAdd(_route);
  };

  return (
    <>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        type="button"
        onClick={() => setModal(!modal)}>
        {modal ? "- " : "+ "}Add New Route
      </button>

      {modal && (
        <div>
          <textarea
            id="message"
            rows={8}
            className="block p-2.5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-400 mt-3"
            placeholder={`latitude,longitude,time latitude,longitude,time`}
            onChange={(e) => setRoute(e.target.value)}></textarea>
          <button
            className="bg-blue-500 rounded-md text-white w-full mt-3 hover:bg-blue-600"
            onClick={handleAdd}>
            Add
          </button>
        </div>
      )}
    </>
  );
};

export default AddNewRoute;
