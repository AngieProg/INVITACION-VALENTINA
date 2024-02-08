import { Invitados } from "../constants";
import { magia } from "../assets/images";

const ListaInvitados = () => {
  return (
    <div className="bg-black flex flex-col items-center pb-8">
      <img src={magia} alt="banner magia" className="w-full h-auto" />
      <div className="text-white md:px-11 px-6 pt-3 text-justify md:py-10">
        <h2 className="font-mea text-3xl md:text-8xl md:py-8 text-center text-dark-brown mb-2">
          Valentina
        </h2>
        <p className="md:text-3.5xl md:mb-2 md:px-11 text-center text-xl mb-1 font-mea">
          "Estamos agradecidos de poder agregar un toque de magia en esta
          ocasión especial. ¡Te deseamos el mejor día de tu vida! Que esta fecha
          tan maravillosa, hoy y siempre brilles con toda tu luz."
        </p>
        <p className="md:text-3xl md:mb-2 font-mea mb-1 text-center">
          Con cariño,
        </p>
        <p className="md:text-3xl md:mb-8 font-mea mb-5 text-center">
          - Magia Digital -
        </p>
        <p className="font-sofia md:text-3xl md:leading-8">
          <span className="font-bold font-montserrat">Instrucciones:</span> A
          continuación tienes la lista de invitados, en donde puedes dar click
          en la columan URL para verificar como se ve la invitación para cada
          invitado. Para enviar por medio de cualquier red social, solo copia el
          link de la columna URL y envialo al invitado correspondiente por tu
          red social favorita. Estamos para ayudarte, cualquier duda,
          contáctanos y con gusto te ayudaremos.
        </p>
      </div>
      <h2 className="font-mea md:text-8xl text-3xl md:py-8 p-4 text-center text-dark-brown">
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
              {/* <td className="p-3 border-separate border cursor-pointer hover:text-dark-pink border-dark-pink">
                <Link
                  target={"_blank"}
                  to={`http://localhost:5174/INVITACION-VALENTINA/invitado/${invitado.id}`}
                >
                  {`http://localhost:5174/INVITACION-VALENTINA/invitado/${invitado.id}`}
                </Link>
              </td> */}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ListaInvitados;
