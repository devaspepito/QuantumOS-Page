import { DownloadButton } from "./DownloadButton.jsx";
import "../styles/components/DownloadCard.css";

export const AnimatedCardWin = () => {
  return (
    <>
      <div className="DownloadContianer">
        <div className="downloadCard">
          <img src="/isoFile.svg" alt="iso image download" />
          <p>QuantumOS for x64 architecture</p>
          <DownloadButton />
        </div>
      </div>
    </>
  );
};
