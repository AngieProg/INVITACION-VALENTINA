const CardFormato = ({ titulo1, titulo2 }) => {
  return (
    <>
      <h3 className="font-sofia text-2xl uppercase text-dark-brown mb-3 md:text-3xl md:mb-5 md:mt-3">
        {titulo1}
      </h3>
      <div data-aos="fade-right">
        <h2 className="font-mea text-4xl text-center mb-3 px-3 text-dark-brown md:text-6xl md:px-8">
          {titulo2}
        </h2>
      </div>
    </>
  );
};

export default CardFormato;
