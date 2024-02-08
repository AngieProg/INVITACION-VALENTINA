import { useEffect } from "react";
import {
  Contador,
  Familia,
  Galeria,
  Invitado,
  Message,
  MiHistoria,
  Ubicaciones,
  Programa,
  Agradecimiento,
  Hero,
  Confirmacion,
} from "./sections";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaInvitados from "./components/ListaInvitados";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/lista-invitados" element={<ListaInvitados />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
          <Hero />
          <section>
            <Message />
          </section>
          <Routes>
            <Route path="/invitado/:id" element={<Invitado />} />
          </Routes>
          <section>
            <Ubicaciones />
          </section>
          <section className="flex justify-center py-8 px-8">
            <Contador />
          </section>
          <section>
            <Familia />
          </section>
          <section className="padding">
            <MiHistoria />
          </section>
          <section>
            <Programa />
          </section>
          <section className="padding-x sm:pt-24 pt-12">
            <Galeria />
          </section>
          <section className="padding">
            <Confirmacion />
          </section>
          <section className="flex justify-center">
            <Agradecimiento />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
