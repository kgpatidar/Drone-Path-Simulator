import { useState } from "react";
import { TPosition, TRoute } from "../types";
import { parse } from "papaparse";

const ImportNewRoute = ({ onAdd }: { onAdd: (v: TRoute) => void }) => {
  const [modal, setModal] = useState(false);
  const [route, setRoute] = useState<TRoute>([]);

  const parseCSV = (csvText: string) => {
    const { data }: { data: TRoute } = parse(csvText, { header: true });
    setRoute(
      data
        .map((item: TPosition) => ({
          latitude: parseFloat(item.latitude as string),
          longitude: parseFloat(item.longitude as string),
          time: item.time,
        }))
        .filter(
          (item) => item.latitude && item.longitude && item.time
        ) as TRoute
    );
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          const text = e.target.result;
          parseCSV(text as string);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        type="button"
        onClick={() => setModal(!modal)}>
        {modal ? "- " : "+ "}Import New Route
      </button>

      {modal && (
        <div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-36 mt-3 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="">Click to upload</span> <br /> drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Upload CSV file
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                accept=".csv"
              />
            </label>
          </div>

          <button
            className="bg-blue-500 rounded-md text-white w-full mt-3 hover:bg-blue-600"
            onClick={() => onAdd(route)}>
            Add
          </button>
        </div>
      )}
    </>
  );
};

export default ImportNewRoute;
