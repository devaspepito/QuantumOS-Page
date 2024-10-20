import { css } from "../../../../styled-system/css";
import { styled } from "../../../../styled-system/jsx";

const ListStyled_1 = styled.li`
  margin: 10px;
`;

const Navigation = styled.nav`
  background-color: #1c2a4a;
  width: 80%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 18px auto;
  border-radius: 12px;
  border-width: 2px;
  border-color: whitesmoke;
  border-style: solid;
  position: sticky;
`;

const UnorderedList = styled.ul`
  display: flex;
  color: whitesmoke;
  flex-direction: row;
  font-weight: bold;
  align-content: center;
`;

const Header = styled.header`
  width: 100%;
  height: 10%;
`;

export { ListStyled_1, Navigation, UnorderedList, Header };
