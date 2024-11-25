import React from "react";
import { AnimatedCardArm64 } from "../../GlobalComponents/Cards/AnimatedCardARM64";
import { AnimatedCardArm } from "../../GlobalComponents/Cards/AnimatedCardARM";
import { Footer } from "../../GlobalComponents/Footer/Footer";
import "./style.css";

export const DownloadSection = () => {
  return (
    <>
      <div className="animatedContainer">
        <AnimatedCardArm64 />
        <AnimatedCardArm />
      </div>
      <Footer />
    </>
  );
};
