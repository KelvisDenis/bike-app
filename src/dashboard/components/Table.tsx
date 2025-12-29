import React from "react";
import "../styles/components/Table.css";
import type { TableProps } from "../interfaces/ITable";



function Table<T extends { id: number | string }>({
  title,
  actionLabel,
  onActionClick,
  columns,
  data,
  onEdit,
  onDelete,
}: TableProps<T>) {
  return (
    <section className="table-wrapper">
      <div className="table-header">
        <h2>{title}</h2>

        {actionLabel && (
          <h3 onClick={onActionClick} className="table-action">
            {actionLabel}
          </h3>
        )}
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.label}</th>
            ))}

            {(onEdit || onDelete) && <th>Ações</th>}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={String(col.key)}>
                  {col.render
                    ? col.render(row)
                    : String(row[col.key as keyof T])}
                </td>
              ))}

              {(onEdit || onDelete) && (
                <td className="actions">
                  {onEdit && (
                    <button onClick={() => onEdit(row)}>Editar</button>
                  )}

                  {onDelete && (
                    <button
                      className="danger"
                      onClick={() => onDelete(row)}
                    >
                      Excluir
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
