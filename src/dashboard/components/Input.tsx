import React from "react";
import "../styles/components/Input.css";
import type { InputProps } from "../interfaces/IInputProps";



function Input({
  label,
  name,
  value,
  type = "text",
  placeholder,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
}: InputProps) {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={error ? "input error" : "input"}
      />

      {error && <small className="error-text">{error}</small>}
    </div>
  );
}

export default Input;
