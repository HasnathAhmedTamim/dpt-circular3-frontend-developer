import PickerField from "./PickerField";

const InputField = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="gap-2 grid grid-cols-1 lg:flex justify-center">
            <input
              type="text"
              name="price"
              id="price"
              className="rounded py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              placeholder="LHR"
            />
            <input
              type="text"
              name="price"
              id="price"
              className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              placeholder="LHR"
            />
            <PickerField></PickerField>
            <PickerField></PickerField>
            <PickerField></PickerField>
            <span className="text-center justify-center items-center flex font-bold">
              +
            </span>
            <PickerField></PickerField>
            <PickerField></PickerField>
            <span className="text-center justify-center items-center flex font-bold">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
