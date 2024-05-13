// import { useEffect, useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import InputField from "../../../Components/Shared/Inputfield";
import RadioButton from "../../../Components/Shared/RadioButton";
import Tab from "../../../Components/Shared/Tab";
import Table from "../../../Components/Shared/Table";
// import axios from "axios";

const MasterPrice = () => {
  const [myData, setMyData] = useState([]);
  const [isSearchData, setIsSearchData] = useState(false);

  useEffect(() => {
    if (isSearchData) {
      axios
        .get("http://localhost:5173/file.txt")
        .then((resp) => setMyData(resp?.data?.flightOffer || []))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [isSearchData]);

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
