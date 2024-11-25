import { styled } from "/styled-system/jsx";

export const DownloadButtonStyled = styled.div`
  .Btn {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    /*background-color: rgb(27, 27, 27);*/
    background-color: #123456;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.11);
  }

  .svgIcon {
    fill: gray;
  }

  .icon2 {
    width: 18px;
    height: 5px;
    border-bottom: 2px solid gray;
    border-left: 2px solid gray;
    border-right: 2px solid gray;
  }

  .tooltip {
    position: absolute;
    right: -105px;
    opacity: 0;
    background-color: rgb(12, 12, 12);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
    pointer-events: none;
    letter-spacing: 0.5px;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: rgb(12, 12, 12);
    background-size: 1000%;
    background-position: center;
    transform: rotate(45deg);
    left: -5%;
    transition-duration: 0.3s;
  }

  .Btn:hover .tooltip {
    opacity: 1;
    transition-duration: 0.3s;
  }

  .Btn:hover {
    background-color: #acac9a;
    transition-duration: 0.3s;
  }

  .Btn:hover .icon2 {
    border-bottom: 2px solid rgb(235, 235, 235);
    border-left: 2px solid rgb(235, 235, 235);
    border-right: 2px solid rgb(235, 235, 235);
  }

  .Btn:hover .svgIcon {
    fill: rgb(255, 255, 255);
    animation: slide-in-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
