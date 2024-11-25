//import { AnimatedCardARM } from "../../CssModules/Modules/StyledComponents";

/*export const AnimatedCardArm = () => {
  return <AnimatedCardARM>AnimatedCardST</AnimatedCardARM>;
};*/

//import { css } from "/styled-system/css";
//import "./test.css";
import { DownloadButton } from "../Buttons/DownloadButton";
import {
  ArmImage,
  DownloadContianer,
} from "../../CssModules/Modules/AnimatedCardArm";

export const AnimatedCardArm = () => {
  return (
    <DownloadContianer>
      <ArmImage src="/isoFile.svg" alt="iso image download" />
      <p>QuantumOS for arm architecture</p>
      <DownloadButton />
    </DownloadContianer>
  );
};
