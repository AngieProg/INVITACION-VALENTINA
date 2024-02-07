import { useEffect, useRef, useState } from "react";
import { musicPausa, musicPlay } from "./../assets/icons";
import Swal from "sweetalert2";
import { sobreSello } from "../assets/images";
import { cancion } from "../assets/music";

const Sobre = () => {
  useEffect(() => {
    mostrarAlerta();
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    isPlaying ? handlePause() : handlePlay();
  };

  const mostrarAlerta = () => {
    Swal.fire({
      title: "¡Bienvenido!",
      text: "¿Desesa ingresar con música?",
      imageUrl: sobreSello,
      imageWidth: 350,
      imageHeight: 280,
      imageAlt: "Custom image",
      background: "#000000",
      confirmButtonColor: "#CE9C9C",
      denyButtonColor: "#CE9C9C",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((response) => {
      if (response.isConfirmed) {
        setIsPlaying(true);
        handlePlay();
      } else {
        setIsPlaying(false);
        handlePause();
      }
    });
  };

  return (
    <div>
      <img
        src={isPlaying ? musicPausa : musicPlay}
        alt="menu music"
        className="w-[28px] h-[28px] object-contain"
        onClick={handlePlayPause}
      />
      <audio ref={audioRef} src={cancion} />
    </div>
  );
};

export default Sobre;
