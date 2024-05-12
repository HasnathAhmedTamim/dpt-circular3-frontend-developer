import axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5173/file.txt")
      .then((resp) => setMyData(resp?.data));
  }, []);

  const data = myData?.flightOffer || [];

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-base-200">
            <th className="lg:w-1/6 lg:table-cell">FLIGHT</th>
            <th>AIRCRAFT</th>
            <th>CLASS</th>
            <th>FARE</th>
            <th>ROUTE</th>
            <th className="lg:w-1/6 lg:table-cell">DEPARTURE</th>
            <th className="lg:w-1/6 lg:table-cell">ARRIVAL</th>
            <th className="lg:w-1/6 lg:table-cell">DURATION</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {data.flatMap((item, index) =>
            item.class[0]?.map((classItem, classIndex) => (
              <tr
                key={`${index}_${classIndex}`}
                className="text-center font-bold text-sm"
              >
                <td className="lg:table-cell">
                  {classIndex === 0
                    ? item.itineraries[0]?.segments[0]?.carrierCode
                    : ""}
                </td>
                <td>
                  {classIndex === 0
                    ? item.itineraries[0]?.segments[0]?.aircraft
                    : ""}
                </td>
                <td>{classItem}</td>
                <td>
                  {item.fareBasis[classIndex]?.map((fare, fareIndex) => (
                    <div key={fareIndex}>{fare}</div>
                  ))}
                </td>
                <td>
                  {item.itineraries.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>
                      {itinerary.segments.map((segment, segmentIndex) => (
                        <div key={segmentIndex}>
                          <span>{segment.departure.iataCode}</span>{" "}
                          <span>{segment.arrival.iataCode}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="lg:table-cell">
                  {item.itineraries.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>
                      {itinerary.segments.map((segment, segmentIndex) => (
                        <div key={segmentIndex}>
                          <span>{segment.departure.at}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="lg:table-cell">
                  {item.itineraries.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>
                      {itinerary.segments.map((segment, segmentIndex) => (
                        <div key={segmentIndex}>
                          <span>{segment.arrival.at}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </td>
                <td className="lg:table-cell">
                  {item.itineraries.map((itinerary, itineraryIndex) => (
                    <div key={itineraryIndex}>{itinerary.duration}</div>
                  ))}
                </td>
                <td>
                  {item.price}
                  <div>
                    <button className="btn btn-sm btn-primary">Search</button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
