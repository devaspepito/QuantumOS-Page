import { styled } from "/styled-system/jsx";

export const ListNavBarStyled = styled.li`
  margin: 10px;
`;

export const Navigation = styled.nav`
  /*background-color: #1a2a4a;*/
  background-color: #324b77;
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

export const UnorderedListNavBar = styled.ul`
  display: flex;
  color: whitesmoke;
  flex-direction: row;
  font-weight: bold;
  align-content: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 10%;
`;
