import CardFormato from "../components/CardFormato";
import { esqIzqEspacio } from "../assets/images";
import { Invitados } from "../constants";
import { useParams, Navigate } from "react-router-dom";
import { persona } from "../assets/icons";

const Invitado = () => {
  const { id } = useParams();
  return (
    <section className="flex justify-center md:py-10 my-10 mx-3">
      <div className="flex flex-col justify-center items-center w-[400px] h-[auto] py-5 border-4 border-separate border-dark-pink  text-center relative md:w-[auto] md:h-[500px] md:py-5">
        <img src={esqIzqEspacio} className="absolute top-0 left-0 -z-10" />

        {Invitados[id - 1] ? (
          <>
            <CardFormato
              titulo1="APRECIABLE"
              titulo2={Invitados[id - 1].nombre}
            />
            <p className="font-montserrat mt-2 mb-5 leading-relaxed text-base w-[300px] text-dark-brown md:text-2xl md:w-[500px] md:mt-5">
              CON INMENSA ALEGRÍA TE INVITO A CELEBRAR MIS XV AÑOS
            </p>
            <div
              className="flex justify-center items-center pb-2 "
              //data-aos="flip-left"
            >
              <img
                src={persona}
                className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]"
              />
              <p className="font-montserrat text-2xl ml-3 text-dark-brown md:text-3xl">
                PASES
              </p>
            </div>
            <p className="font-sofia text-2xl ml-3 uppercase text-dark-brown md:text-3xl">
              Adultos: {Invitados[id - 1].adultos}
            </p>
            {Invitados[id - 1].ninos && (
              <p className="font-sofia text-2xl ml-3 uppercase text-dark-brown md:text-3xl">
                Niños: {Invitados[id - 1].ninos}
              </p>
            )}
          </>
        ) : (
          <Navigate replace to="/" />
        )}
      </div>
    </section>
  );
};

export default Invitado;
