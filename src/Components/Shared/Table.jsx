const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-base-200">
            <th>FLIGHT</th>
            <th>AIRCRAFT</th>
            <th>CLASS</th>
            <th>FARE</th>
            <th>ROUTE</th>
            <th>DEPARTURE</th>
            <th>ARRIVAL</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <td className="flex justify-center">
              Blue
              <button className="btn btn-primary ml-2">Search</button>
            </td>
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <td className="flex justify-center">
              Blue
              <button className="btn btn-primary ml-2">Search</button>
            </td>
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <td className="flex justify-center">
              Blue
              <button className="btn btn-primary ml-2">Search</button>
            </td>
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <td className="flex justify-center">
              Blue
              <button className="btn btn-primary ml-2">Search</button>
            </td>
          </tr>
          <tr className="text-center">
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <td className="flex justify-center">
              Blue
              <button className="btn btn-primary ml-2">Search</button>
            </td>
          </tr>
          {/* Repeat the pattern for other rows */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
