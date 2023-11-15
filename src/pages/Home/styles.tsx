import styled from "styled-components";

export const ButtonBox = styled.div`
  position: absolute;
  z-index: 1002;
  bottom: 0;
  margin-bottom: 68px;
  text-align: center;
  left: 0;
  right: 0;
`;

export const ButtonConfirm = styled.button`
  background-color: #46177d;
  width: 410.52px;
  height: 68.42px;
  border-radius: 10px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  outline: 0;
  position: relative;
` as React.ComponentType<{ onClick?: React.MouseEventHandler<HTMLButtonElement> }>;
