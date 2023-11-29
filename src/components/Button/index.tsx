import './button.css';

type ButtonProps = {
    texto: string;
    onClick?: () => void;
    className?: string;
    type?: string;
  };
  
  function Button(props: ButtonProps) {
    return (
      <button className="Button" onClick={props.onClick}>
        {props.texto}
      </button>
    );
  }
  
  export default Button;