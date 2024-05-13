import PickerField from "./PickerField";

const InputField = ({
  searchFlight,
  setSearchFlight,
  searchAircraft,
  setSearchAircraft,
  // filterData,
  handleSearchButton
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="gap-2 grid grid-cols-1 lg:flex justify-center">
            <input
              type="text"
              name="flight"
              id="flight"
              value={searchFlight}
              onChange={(e) => setSearchFlight(e.target.value)}
              className="rounded py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              placeholder="Search Flight"
            />
            <input
              type="text"
              name="aircraft"
              id="aircraft"
              value={searchAircraft}
              onChange={(e) => setSearchAircraft(e.target.value)}
              className="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
              placeholder="Search Aircraft"
            />
            <PickerField title={"Day"} />
            <PickerField title={"Day+"} />
            <PickerField title={"AnyTime"} />
            <span className="text-center justify-center items-center flex font-bold">
              +
            </span>
            <PickerField title={"ADT"} />
            <PickerField title={"1"} />

            <span className="text-center justify-center items-center flex font-bold">
              +
            </span>
            <button
              onClick={handleSearchButton}
              className="px-4 py-2 btn-primary btn text-white rounded-md ml-0 sm:ml-2 mt-2 sm:mt-0"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
