import React from "react";

function InputField({ label, name, placeholder, onChange, value }) {
  return (
    <div className="flex justify-center flex-col content-center">
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}

export default InputField;
