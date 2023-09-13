import React from "react";

const CustomInputField = ({
  type = "text",
  name,
  id,
  className = "",
  placeholder,
  onChange,
  value,
}) => {
  const inputClassName = `w-full border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-blue-400 placeholder-gray-600 text-gray-900 ${className}`;

  return (
    <input
      type={type}
      id={id}
      name={name}
      className={inputClassName}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomInputField;
