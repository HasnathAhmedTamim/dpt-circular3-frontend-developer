const PickerField = ({title}) => {
  return (
    <div>
      <label className=" ">
        <select className="select select-bordered">
          <option disabled selected>
            {title}
          </option>
          <option>Star Wars</option>
          <option>Harry Potter</option>
          <option>Lord of the Rings</option>
          <option>Planet of the Apes</option>
          <option>Star Trek</option>
        </select>
      </label>
    </div>
  );
};

export default PickerField;
