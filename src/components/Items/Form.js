import React from 'react';

const Form = ({ handleChange, userData, handleSubmit, logged }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            onChange={handleChange}
            value={userData.name}
            required
          ></input>
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            name="lastName"
            onChange={handleChange}
            value={userData.lastName}
            required
          ></input>
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            placeholder="Teléfono (insertar mínimo 7 dígitos)"
            name="phone"
            onChange={handleChange}
            value={userData.phone}
            required
          ></input>
        </div>
          <div>
            <label>
              E-mail
            </label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
            ></input>
          </div>
          <button>
            Realizar compra
          </button>
      </form>
    </div>
  );
};

export default Form