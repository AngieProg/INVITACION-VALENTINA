import { Invitados } from "../constants";
import { NavLink } from "react-router-dom";

const Guess = () => {
  return (
    <div>
      <h2>Invitados</h2>
      <ul>
        {Invitados.map((invitado) => (
          <li key={invitado.id}>
            <NavLink to={`/inv_prueba/invitado/${invitado.id}`}>
              <h3>{invitado.nombre}</h3>
              {/* <p>{post.content}</p> */}
            </NavLink>
          </li>
        ))}
        ,
      </ul>
    </div>
  );
};

export default Guess;
