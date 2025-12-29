import React from "react";
import "../styles/components/Form.css";
import type { FormProps } from "../interfaces/IFormProps";



function Form({ title, onSubmit, submitText = "Salvar", handleCancel, children }: FormProps) {
  return (
    <form className="app-form" onSubmit={onSubmit}>
      {title && <h2>{title}</h2>}

      <div className="form-content">
        {children}
      </div>

      <div className="modal-actions">
        <button type="submit">{submitText}</button>
        <button
          type="button"
          className="cancel"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>

    </form>
  );
}

export default Form;
