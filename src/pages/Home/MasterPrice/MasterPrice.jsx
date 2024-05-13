// import { useEffect, useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import InputField from "../../../Components/Shared/Inputfield";
import RadioButton from "../../../Components/Shared/RadioButton";
import Tab from "../../../Components/Shared/Tab";
import Table from "../../../Components/Shared/Table";
// import axios from "axios";

const MasterPrice = () => {
  // State variables for storing data and search status
  const [myData, setMyData] = useState([]);
  const [isSearchData, setIsSearchData] = useState(false);

  // Effect hook to fetch data when search is triggered
  useEffect(() => {
    // Fetch data if search is triggered
    if (isSearchData) {
      axios
        .get(
          "https://dpt-circular3-frontend-developer-ruby.vercel.app/data/LHR_CDG_ADT1_TYPE_1.txt"
        )
        .then((resp) => setMyData(resp?.data?.flightOffer || []))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [isSearchData]);
  // Function to handle search button click
  const handleSearchButton = () => {
    console.log("yes");
    setIsSearchData(true);
  };

  return (
    <div className="grid  justify-center items-center">
      <h1 className="text-black font-bold text-3xl p-2 ">Master Price</h1>

      <div className="">
        <div>
          <Tab></Tab>
        </div>
        <hr className=" bottom-1 border w-full border-blue-500 my-4" />
        <div>
          <InputField handleSearchButton={handleSearchButton}></InputField>
        </div>
        <hr className=" bottom-1 border w-full border-blue-500 my-4" />

        <div>
          <RadioButton></RadioButton>
        </div>
        <hr className=" bottom-1 border w-full border-blue-500 my-4" />

        <p>Parsed successfully</p>
        <div className="mb-24">
          <Table myData={myData}></Table>
          {/* {data?.map((data, id) => (
          <Table key={id} data={data}></Table>
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default MasterPrice;
