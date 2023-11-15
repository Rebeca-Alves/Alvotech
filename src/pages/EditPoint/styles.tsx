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
`;

export const File = styled.input`
  width: 500px;
  height: 55px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px; /* Adjust as needed to cover the button */
  cursor: pointer;
  opacity: 0;
`;

export const CustomFileInput = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-top: 250px;
`;

export const CustomFileInputButton = styled.button`
  border: 2px solid #ccc;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
  cursor: pointer;

  width: 500px;
  height: 55px;
  border-radius: 25px;
  background: #d1cdcd;
  display: flex;
  justify-content: space-between;
`;

export const TextButton = styled.h1`
  color: rgba(0, 0, 0, 0.65);
  text-align: center;
  font-family: ABeeZee;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

export const Description = styled.p`
  color: #000;
  text-align: center;
  font-family: ABeeZee;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonSend = styled.button`
  width: 228.744px;
  height: 48.979px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #46177d;
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  outline: none;
  margin-top: 120px;
`;
