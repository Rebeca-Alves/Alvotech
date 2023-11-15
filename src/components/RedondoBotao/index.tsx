import React from "react";
import "./redondoB.css";

interface RedondoBotaoProps {
  onClick: () => void;
  label: string;
}

const Botao: React.FC<RedondoBotaoProps> = ({ onClick, label }) => {
  return (
    <button className="redondo-botao" onClick={onClick}>
      {label}
    </button>
  );
};

export default Botao; 

