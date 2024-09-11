const SelectField = (props) => {
  const { label, handleChange, name, defaultOption, options, value } = props;
  return (
    <div className="w-full p-1">
      <label
        className="flex flex-col font-syne font-semibold text-md"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        id={name}
        onChange={handleChange}
        defaultValue="package"
        name={name}
        className="w-full text-dark-gray bg-light-gray my-1 p-2 text-sm "
      >
        <option value="package" disabled>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-sm">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
