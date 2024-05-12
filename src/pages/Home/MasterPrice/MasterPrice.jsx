
// import { useEffect, useState } from "react";
import InputField from "../../../Components/Shared/Inputfield";
import RadioButton from "../../../Components/Shared/RadioButton";
import Tab from "../../../Components/Shared/Tab";
import Table from "../../../Components/Shared/Table";
// import axios from "axios";


const MasterPrice = () => {
  // const [myData, setMyData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5173/file.txt")
  //     .then((resp) => setMyData(resp?.data));
  // }, []);
  // const data = myData.flightOffer;
  // console.log(data);
  return (
    <div className="grid  justify-center items-center">
      <h1 className="text-black font-bold text-3xl p-2 ">Master Price</h1>

      <div className="">
        <div>
          <Tab></Tab>
        </div>
        <hr className=" bottom-1 border w-full border-blue-500 my-4" />
        <div>
          <InputField></InputField>
        </div>
        <hr className=" bottom-1 border w-full border-blue-500 my-4" />

        <div>
          <RadioButton></RadioButton>
        </div>
        <hr className=" bottom-1 border w-full border-blue-500 my-4" />

        <p>Parsed successfully</p>
        <div className="mb-24">
          <Table></Table>
          {/* {data?.map((data, id) => (
          <Table key={id} data={data}></Table>
        ))} */}
        </div>
      </div>
    </div>
  );
};

export default MasterPrice;
