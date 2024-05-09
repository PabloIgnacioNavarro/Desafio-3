import { useState } from "react";
import { usuarios } from "./assets/usuarios"; //importado desde js// //punto 2 desafío//

function App() {
  const [personas, setPersonas] = useState(usuarios);
  const [alert, setAlert] = useState("");
  console.log(personas);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  function guardar(e) {
    e.preventDefault();
    const ultimoNombre = personas[personas.length - 1].nombre;
    const nuevoUsuario = {
      nombre: ultimoNombre + 1,
      correo,
      edad,
      cargo,
      telefono,
    };
    if (
      nombre === "" ||
      correo === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === ""
    ) {
      return setAlert("Completa todos los campos!");
    }
    setPersonas([...personas, nuevoUsuario]);
    setAlert("");
    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  }
  return (
    <>
      <h1>Lista de colaboradores</h1>
      <form onSubmit={guardar}>
        <input
          type="text"
          placeholder="Busca un colaborador"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        ></input>
        <section style={{ display: "flex", gap: "20px" }}></section>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Juan Soto</th>
              <td>juans@colaborador.com</td>
              <td>23</td>
              <td>Desarrolador FrontEnd</td>
              <td>99887766</td>
            </tr>
            <tr>
              <th scope="row">Lucas Pailamilla</th>
              <td>lucasp@colaborador.com</td>
              <td>31</td>
              <td>Desarrollador Backend</td>
              <td>88779955</td>
            </tr>
            <tr>
              <th scope="row">Diego Riquelme</th>
              <td>diegor@colaborador.com</td>
              <td>28</td>
              <td>Ingeniero DevOps</td>
              <td>99226644</td>
            </tr>
          </tbody>
        </table>
        <h3>Agregar colaborador</h3>
        {personas.map((elemento) => (
          <article>
            <h3>{elemento.nombre}</h3>
            <h3>{elemento.correo}</h3>
            <h3>{elemento.edad}</h3>
            <h3>{elemento.cargo}</h3>
            <h3>{elemento.telefono}</h3>
          </article>
        ))}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Nombre del colaborador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Email del colaborador"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Edad del colaborador"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Cargo del colaborador"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Teléfono del colaborador"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-primary">
            Agregar colaborador
          </button>
          <button type="submit" className="btn btn-danger">
            {alert}
          </button>
        </section>
      </form>
    </>
  );
}

export default App;
