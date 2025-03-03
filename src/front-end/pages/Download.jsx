import React from "react";
import { AnimatedCardWin } from "../components/DownloadCard.jsx";
import "../styles/components/Download.css";

export const Download = () => {
  return (
    <>
      <main className="AllContent">
        <div className="downloadContainer">
          <AnimatedCardWin />
        </div>
      </main>
    </>
  );
};
