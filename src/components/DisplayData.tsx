"use client";
import { useState } from "react";
// Updated sorting function that clones the array and uses localeCompare for strings.
const getSortedData = (mode: string, data: any[]) => {
  let dataTemp = [...data];
  switch (mode) {
    case "created":
      dataTemp.sort((a, b) => b.date - a.date);
      break;
    case "name-dsc":
      dataTemp.sort((a, b) => b.fileName.localeCompare(a.fileName));
      break;
    default:
      dataTemp.sort((a, b) => a.fileName.localeCompare(b.fileName));
  }
  return dataTemp;
};

export default function FileDataClient({ data }: { data: any[] }) {
  const [sortMode, setSortMode] = useState("created");

  // Define dropdown options – adjust labels as needed.
  const options = [
    { value: "created", label: "By Created At" },
    { value: "name-asc", label: "By Name Ascending" },
    { value: "name-dsc", label: "By Name Descending" },
  ];

  const sortedData = getSortedData(sortMode, data);

  return (
    <div className="bg-black" style={{ height: '100vh' }}>
      <div className="p-6">
        <div className="flex flex-col items-center">

          <div className="mb-6">
            <select
              className=" text-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value)}
            >
              {options.map((opt) => (
                <option className="text-white" key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {sortedData.map((item, index) => (
              <div key={index} className="p-4 border shadow-sm rounded-xl border-white">
                <p className="font-semibold text-white">{item.date}</p>
                <p className="text-gray-600 text-white">{item.fileName}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
