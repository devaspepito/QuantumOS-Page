// React Imports
import React from "react";

// Local Imports

// Style Imports
import "../styles/Home.css";

export const Home = () => {
  return (
    <>
      <main className="AllContent">
        <div className="description">
          <h1 className="headOne">Descripción</h1>
          <p className="text">
            QuantumOS es un proyecto donde desarrolla una versión personalizada
            y optimizada de Windows 10 enfocada en mejorar el rendimiento en PCs
            y Laptops con componentes de bajos recursos, mediante la reducción
            de procesos innecesarios, optimización de servicios y ajustes de
            configuración del sistema.
          </p>
        </div>

        <div className="double">
          <div className="mision">
            <h1 className="headOne">Misión</h1>
            <p className="text">
              Desarrollar una versión optimizada y personalizada de Windows 10
              que maximice el rendimiento en PCs y Laptops de bajos recursos,
              mediante la eficiencia en el uso de recursos del sistema y la
              simplificación de procesos. Nuestro compromiso es ofrecer una
              experiencia de usuario fluida y ágil, adaptada a las necesidades
              de equipos con hardware limitado.
            </p>
          </div>

          <div className="vision">
            <h1 className="headOne">Visión</h1>
            <p className="text">
              Ser reconocidos como líderes en personalización y optimización de
              sistemas operativos, proporcionando soluciones innovadoras que
              mejoren el rendimiento de dispositivos de bajos recursos.
              Aspiramos a impactar positivamente en la experiencia tecnológica
              de usuarios en colombia, haciendo que PCs y Laptops antiguas sean
              más rápidas, eficientes y funcionales.
            </p>
          </div>
        </div>

        <div className="lists">
          <div className="addedApps">
            <h1 className="headOne">Aplicaciones agregadas</h1>

            <ul className="unorderedList">
              <li className="listItem">Optimizer</li>
            </ul>
          </div>

          <div className="characteristics">
            <h1 className="headOne">Caracteristicas de QuantumOS</h1>
            <ul className="unorderedList">
              <li className="listItem">Mayor personalizacion</li>
              <li className="listItem">Eliminacion de bloatware</li>
              <li className="listItem">Bajo consumo de recursos</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};
