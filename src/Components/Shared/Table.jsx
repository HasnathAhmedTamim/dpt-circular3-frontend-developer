import axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/file.txt")
      .then((resp) => setMyData(resp?.data?.flightOffer || []))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="overflow-x-auto border-2">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Flight
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Aircraft
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fare
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Route
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Departure
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Arrival
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Duration
            </th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {myData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } text-center text-sm`}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {item.itineraries[0]?.segments[0]?.carrierCode}{" "}
                {item.itineraries[0]?.segments[0]?.flightNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.itineraries[0]?.segments[0]?.aircraft}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.class[0]?.map((classItem, classIndex) => (
                  <div key={classIndex}>{classItem}</div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.fareBasis[0]?.map((fare, fareIndex) => (
                  <div key={fareIndex}>{fare}</div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.itineraries[0]?.segments.map((segment, segmentIndex) => (
                  <div key={segmentIndex}>
                    <span>{segment.departure.iataCode}</span>{" "}
                    <span>{segment.arrival.iataCode}</span>
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.itineraries[0]?.segments.map((segment, segmentIndex) => (
                  <div key={segmentIndex}>
                    <span>{segment.departure.at}</span>
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.itineraries[0]?.segments.map((segment, segmentIndex) => (
                  <div key={segmentIndex}>
                    <span>{segment.arrival.at}</span>
                  </div>
                ))}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.itineraries[0]?.duration}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.price}
                <div>
                  <button className="btn btn-sm btn-primary">Select</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;