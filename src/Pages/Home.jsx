import React from "react";
import { Section } from "../Styles/Styled.jsx";
import { css } from "/styled-system/css";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Home = () => {
  return (
    <>
      <Section>
        <h1>Descripcion</h1>
        <p
          className={css({
            width: "45rem",
          })}
        >
          QuantumOS es una ROM GSI Vanilla basada en LineageOS, diseñada para
          ofrecer una experiencia de Android pura, ligera y altamente
          personalizable. Incluye herramientas adicionales que facilitan la
          personalización del sistema, permitiendo a los usuarios ajustar cada
          detalle según sus preferencias. Además, está optimizada para reducir
          el consumo de recursos, logrando un rendimiento fluido incluso en
          dispositivos con hardware limitado. QuantumOS combina la estabilidad
          de LineageOS con mejoras enfocadas en la eficiencia y la flexibilidad,
          ideal para entusiastas que buscan un sistema minimalista y adaptable.
        </p>

        <h1>Misión</h1>
        <p>
          Proporcionar a los usuarios una ROM GSI que combine la robustez de
          LineageOS con herramientas adicionales para una personalización
          sencilla y profunda, todo mientras minimiza el consumo de recursos del
          sistema. QuantumOS se compromete a ofrecer una experiencia fluida y
          adaptable, asegurando que cada dispositivo pueda aprovechar al máximo
          su potencial sin comprometer la estabilidad ni la velocidad.
        </p>

        <h1>Visión</h1>
        <p>
          Crear una experiencia de Android pura, ligera y eficiente, que permita
          a los usuarios tener un sistema altamente personalizable y optimizado,
          sin sacrificar el rendimiento. QuantumOS busca ser la opción ideal
          para quienes desean una base estable, libre de bloatware, que se
          adapte a sus necesidades y maximice la eficiencia en cualquier
          dispositivo.
        </p>

        <h1>Aplicaciones agregadas</h1>

        <ul>
          <li>- FrancoKernelManager</li>
        </ul>

        <h1>Caracteristicas de QuantumOS</h1>
        <p
          className={css({
            width: "45rem",
          })}
        >
          <ul>
            <li>- Mayor personalizacion</li>
            <li>
              - Mayor libertad de eleccion (Instalar o no Instalar gapps
              oficiales)
            </li>
            <li>- Eliminacion de bloatware</li>
            <li>- Bajo consumo de recursos</li>
            <li>
              - Soporte multiplataforma en procesadores de arquitectura ARM y
              ARM64
            </li>
          </ul>
        </p>
      </Section>
    </>
  );
};
