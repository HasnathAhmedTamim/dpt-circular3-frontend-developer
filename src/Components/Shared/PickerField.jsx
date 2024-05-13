const PickerField = ({title}) => {
  return (
    <div>
      <label className=" ">
        <select className="select select-bordered">
          <option disabled selected>
            {title}
          </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </label>
    </div>
  );
};

export default PickerField;
