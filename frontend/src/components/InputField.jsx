import React from "react";

function InputField({ label, type, placeholder }) {
  return (
    <div className="flex justify-center flex-col content-center">
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
      />
    </div>
  );
}

export default InputField;
