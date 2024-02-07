import { ubicaciones } from "../constants/index";
import CardFormato from "../components/CardFormato";
import Separador from "../components/Separador";
import { Link } from "react-router-dom";

const Ubicacion = () => (
  <section className="flex justify-center mt-10">
    <div className="flex flex-col justify-center items-center bg-white-400 text-center">
      <CardFormato
        titulo1="¿DÓNDE Y CUÁNDO?"
        titulo2="Ubicaciones e Itinerario"
      />
      <Separador />

      <div className="flex flex-col lg:flex-row lg:gap-8 lg:px-3 justify-center">
        {ubicaciones.map((ubicacion, index) => (
          <div key={index} className="mb-[200px] relative flex justify-center">
            <img
              src={ubicacion.img}
              alt={ubicacion.titulo2}
              className="w-[100%] h-[400px]"
            />
            <div className="absolute -bottom-[150px] border-dark-pink border-4">
              <div className="flex flex-col bg-white justify-center items-center px-8 py-8 w-[350px] shadow-3xl">
                <img
                  src={ubicacion.icon}
                  alt={ubicacion.titulo1}
                  className="w-[50px] h-[50px]"
                  data-aos="zoom-out-up"
                />
                {ubicacion.titulo1 && (
                  <h3 className="font-sofia text-base py-2">
                    {ubicacion.titulo1}
                  </h3>
                )}
                <h2 className="font-mea text-3xl py-3" data-aos="fade-right">
                  {ubicacion.titulo2}
                </h2>
                {ubicacion.hora && (
                  <div className="flex pb-2 items-center ">
                    <img
                      src={ubicacion.icon2}
                      alt="hora"
                      className="w-[17px] h-[17px]"
                    />
                    <p className="font-montserrat text-sm ml-2">
                      {ubicacion.hora} HRS
                    </p>
                  </div>
                )}
                {ubicacion.parrafo && (
                  <p className="font-montserrat text-slate-gray text-sm mb-4">
                    {ubicacion.parrafo}
                  </p>
                )}
                <div data-aos="flip-left">
                  <Link
                    target={"_blank"}
                    to={ubicacion.url1}
                    className="pink_gradient flex justify-around items-center border-2 border-dark-brown rounded-2xl p-1 mb-3 w-[150px]"
                  >
                    <img
                      src={ubicacion.icon3}
                      alt="gps"
                      className="w-[20px] h-[20px]"
                    />
                    {ubicacion.btn1}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Ubicacion;
