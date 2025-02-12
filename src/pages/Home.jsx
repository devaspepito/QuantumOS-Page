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
          <h1 className="headOne">Description</h1>
          <p className="text">
            QuantumOS is a Windows Lite Version based on Windows 10 22H3,
            designed to offer a pure, light and highly customizable Android
            experience. Includes additional tools that facilitate the
            customization of the system, allowing users to adjust every detail
            according to their preferences. In addition, it is optimized to
            reduce the consumption of resources, achieving a fluid performance
            even in devices with limited hardware. Quantumics combines the
            stability of lineage with improvements focused on efficiency and
            flexibility, ideal for enthusiasts looking for a minimalist and
            adaptable system.
          </p>
        </div>

        <div className="double">
          <div className="mision">
            <h1 className="headOne">Misión</h1>
            <p className="text">
              Proporcionar a los usuarios una version de Windows para exigir los
              requisitos minimos que combine la robustez de Windows Normal con
              herramientas adicionales para una personalización sencilla y
              profunda, todo mientras minimiza el consumo de recursos del
              sistema. QuantumOS se compromete a ofrecer una experiencia fluida
              y adaptable, asegurando que cada computador de escritorio o laptop
              pueda aprovechar al máximo su potencial sin comprometer la
              estabilidad ni la velocidad.
            </p>
          </div>

          <div className="vision">
            <h1 className="headOne">Visión</h1>
            <p className="text">
              Crear una experiencia de Windows mejorada, ligera y eficiente, que
              permita a los usuarios tener un sistema altamente personalizable y
              optimizado, sin sacrificar el rendimiento. QuantumOS busca ser la
              opción ideal para quienes desean una base estable, libre de
              bloatware, que se adapte a sus necesidades y maximice la
              eficiencia en cualquier computadora.
            </p>
          </div>
        </div>

        <div className="lists">
          <div className="addedApps">
            <h1 className="headOne">Aplicaciones agregadas</h1>

            <ul className="unorderedList">
              <li className="listItem">Optimizer</li>
              <li className="listItem">M</li>
              <li className="listItem">a</li>
              <li className="listItem">n</li>
              <li className="listItem">a</li>
              <li className="listItem">g</li>
              <li className="listItem">e</li>
              <li className="listItem">r</li>
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
