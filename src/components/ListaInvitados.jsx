import { Link } from "react-router-dom";
import { Invitados } from "../constants";
// import { NavLink } from "react-router-dom";

const ListaInvitados = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <h2 className="font-mea md:text-8xl py-8 text-center text-dark-brown">
        Invitados
      </h2>

      <table className="text-white border-separate border border-dark-pink">
        <thead>
          <tr className="text-3xl text-center text-dark-brown">
            <th className="p-3 border-separate border border-dark-pink">ID</th>
            <th className="p-3 border-separate border border-dark-pink">
              Nombre
            </th>
            <th className="p-3 border-separate border border-dark-pink">
              Adultos
            </th>
            <th className="p-3 border-separate border border-dark-pink">
              Niños
            </th>
            <th className="p-3 border-separate border border-dark-pink">URL</th>
          </tr>
        </thead>
        {Invitados.map((invitado) => (
          <tbody key={invitado.id} className="text-2xl text-center">
            <tr>
              <td className="p-3 border-separate border border-dark-pink">
                {invitado.id}
              </td>
              <td className="p-3 border-separate border border-dark-pink">
                {invitado.nombre}
              </td>
              <td className="p-3 border-separate border border-dark-pink">
                {invitado.adultos}
              </td>
              <td className="p-3 border-separate border border-dark-pink">
                {invitado.ninos}
              </td>
              <td className="p-3 border-separate border cursor-pointer hover:text-dark-pink border-dark-pink">
                <Link
                  target={"_blank"}
                  to={`http://localhost:5173/inv_prueba/invitado/${invitado.id}`}
                >
                  {`http://localhost:5173/inv_prueba/invitado/${invitado.id}`}
                </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <ul className="list-decimal cursor-pointer text-center">
        {Invitados.map((invitado) => (
          <li
            key={invitado.id}
            className="text-white font-sofia hover:text-dark-brown md:text-2xl md:py-2"
          >
            {/* <NavLink to={`/inv_prueba/invitado/${invitado.id}`}>
              <h3>{invitado.nombre}</h3>
            </NavLink> */}
            {invitado.id} .- {invitado.nombre} - {invitado.adultos} -{" "}
            {invitado.ninos}
          </li>
        ))}
        ,
      </ul>
    </div>
  );
};

export default ListaInvitados;
