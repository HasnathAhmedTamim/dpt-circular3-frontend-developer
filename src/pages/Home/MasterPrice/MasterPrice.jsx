
import InputField from "../../../Components/Shared/Inputfield";
import RadioButton from "../../../Components/Shared/RadioButton";
import Tab from "../../../Components/Shared/Tab";

const MasterPrice = () => {
  return (
    <div className="grid justify-center">
      <h1 className="text-black font-bold text-3xl p-2 ">Master Price</h1>

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
    </div>
  );
};

export default MasterPrice;
