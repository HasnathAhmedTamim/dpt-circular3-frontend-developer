const RadioButton = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center mt-4 justify-between font-bold ">
      <div className="mb-2 md:mb-0 md:mr-4 ">
        {" "}
        <input type="checkbox" id="extraOptions" name="extraOptions" />
        Extra Options
      </div>
      <div className="flex flex-wrap gap-2">
        <input type="radio" value="Environment" name="Environment" />{" "}
        Environment
        <input type="radio" value="Dummy" name="Dummy" /> Dummy
        <input type="radio" value="PDT" name="PDT" /> PDT
      </div>
      <div>
        {/* <button className="btn btn-primary mt-2 md:mt-0">Search</button> */}
      </div>
    </div>
  );
};

export default RadioButton;
