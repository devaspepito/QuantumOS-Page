import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/register.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="repeatPassword"
        placeholder="Verificar Contraseña"
        onChange={handleChange}
        required
      />
      <button type="submit">Registrarse</button>
    </form>
  );
};
