import styled from "styled-components";

export const MenuBox = styled.div`
  height: 100vh;
  width: 380px;
  background-color: #46177d;
  position: absolute;
  z-index: 1001;
  padding: 10px;
  font-size: 50px;
`;

export const MenuBoxList = styled.ul`
  list-style: none;
  margin-top: 50px;
  text-align: left;
`;

export const ListItem = styled.li`
  font-size: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
  margin: 10 px 0;
`;

export const ItemIcon = styled.img`
  margin-right: 13.5px;
  margin-bottom: 2px;
  
`;

export const MenuBoxLogo = styled.img`
  margin-top: 100px;
  display: block;
  width: 200px;
  height: 80px;
  margin-left: 80px;

`;

export const BoxOpenClose = styled.div`
  text-align: left;
  margin-left: 35px;
  margin-top: 30px;
`;

