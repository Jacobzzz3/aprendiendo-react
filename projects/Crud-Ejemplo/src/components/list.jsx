import React from "react";

export function ListaPrueba({ todo, cambiarEstado }) {
    const { id, task, completed } = todo;

    const fnCambiarEstado = () => {
        cambiarEstado(id);
    }
    return (
        <li className="list-group-item">
            <input type="checkbox" onChange={fnCambiarEstado} checked={completed} className="form-check-input me-2" />
            {task}
        </li>
    )
}