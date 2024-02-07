import { Link } from "react-router-dom";

const Boton = ({ label, img, url1 }) => {
  return (
    // <Link target={"_blank"} to={`https://maps.app.goo.gl/kdzPSM31eNd3YAXs6`}>
    <Link target={"_blank"} to={url1}>
      <button className="pink_gradient flex justify-around items-center border-2 border-dark-brown rounded-2xl p-1 mb-3 w-[150px]">
        <img src={img} alt="gps" className="w-[20px] h-[20px]" />
        {label}
      </button>
    </Link>
  );
};

export default Boton;
