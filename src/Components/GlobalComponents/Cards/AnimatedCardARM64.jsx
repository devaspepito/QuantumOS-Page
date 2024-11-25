import {
  Arm64Image,
  DownloadContianer64,
} from "../../CssModules/Modules/AnimatedCardArm64";
import { DownloadButton } from "../Buttons/DownloadButton";
//import "./test.css";

export const AnimatedCardArm64 = () => {
  return (
    <DownloadContianer64>
      <Arm64Image src="/isoFile.svg" alt="iso image download" />
      <p>QuantumOS for arm64 architecture</p>
      <DownloadButton />
    </DownloadContianer64>
  );
};
