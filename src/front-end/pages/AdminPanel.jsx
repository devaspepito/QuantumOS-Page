import "../styles/AdminPanel.css";

import React, { useState } from "react";

export const AdminPanel = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="admin-container">
      <h1 className="admin-title">Administración de ISOs</h1>

      <button className="btn add-btn" onClick={() => setShowAddModal(true)}>
        Agregar ISO
      </button>

      <table className="iso-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tamaño</th>
            <th>Subido por</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ISO de ejemplo</td>
            <td>2GB</td>
            <td>Admin</td>
            <td>2024-02-25</td>
            <td>
              <button
                className="btn edit-btn"
                onClick={() => setShowEditModal(true)}
              >
                Editar
              </button>
              <button
                className="btn delete-btn"
                onClick={() => setShowDeleteModal(true)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {showEditModal && (
        <div className="modal">
          <h2 className="modal-title">Editar ISO</h2>
          <label className="modal-label">
            Nombre: <input className="modal-input" name="name" />
          </label>
          <label className="modal-label">
            Tamaño: <input className="modal-input" name="size" />
          </label>
          <label className="modal-label">
            Subido por: <input className="modal-input" name="uploader" />
          </label>
          <label className="modal-label">
            Fecha: <input className="modal-input" name="date" />
          </label>
          <button className="btn save-btn">Guardar</button>
          <button
            className="btn cancel-btn"
            onClick={() => setShowEditModal(false)}
          >
            Cancelar
          </button>
        </div>
      )}

      {showDeleteModal && (
        <div className="modal">
          <h2 className="modal-title">Confirmar Eliminación</h2>
          <p className="modal-text">
            ¿Estás seguro de que deseas eliminar esta ISO?
          </p>
          <button className="btn confirm-btn">Confirmar</button>
          <button
            className="btn cancel-btn"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancelar
          </button>
        </div>
      )}

      {showAddModal && (
        <div className="modal">
          <h2 className="modal-title">Agregar Nueva ISO</h2>
          <label className="modal-label">
            Nombre: <input className="modal-input" name="name" />
          </label>
          <label className="modal-label">
            Versión: <input className="modal-input" name="version" />
          </label>
          <label className="modal-label">
            Build: <input className="modal-input" name="build" />
          </label>
          <label className="modal-label">
            Edición: <input className="modal-input" name="edition" />
          </label>
          <label className="modal-label">
            Arquitectura: <input className="modal-input" name="architecture" />
          </label>
          <label className="modal-label">
            Tamaño: <input className="modal-input" name="size" />
          </label>
          <label className="modal-label">
            Archivo ISO:{" "}
            <input className="modal-input" type="file" name="file" />
          </label>
          <button className="btn upload-btn">Subir</button>
          <button
            className="btn cancel-btn"
            onClick={() => setShowAddModal(false)}
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};
