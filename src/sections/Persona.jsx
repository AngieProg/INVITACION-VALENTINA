import { Invitados } from "../constants";
import { useParams, Navigate } from "react-router-dom";

const Persona = () => {
  const { id } = useParams();
  console.log("entro a persona");
  return (
    <>
      <h1> entro a persona</h1>
      {Invitados[id - 1] ? (
        <div>
          <h1> hago map de invitados</h1>
          <h1>{Invitados[id - 1].nombre}</h1>
          <p>{Invitados[id - 1].pases}</p>
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default Persona;
