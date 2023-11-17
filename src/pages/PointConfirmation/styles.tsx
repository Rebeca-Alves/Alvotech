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

export const File = styled.input`
  width: 500px;
  height: 55px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  font-size: 20px;
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
  margin-top: 54px;
  border-radius: 10px;
  background: #46177D;
  width: 410.52px;
  height: 68.418px;
`;

export const Title = styled.h1`
  color: rgba(4, 67, 45, 0.7);
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
  margin-top: 130px;
`;

export const SubTitle = styled.h2`
  color: #6c7370;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

