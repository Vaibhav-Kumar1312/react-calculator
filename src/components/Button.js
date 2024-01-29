import classes from "./Button.module.css";

const Button = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className={classes.buttonWrapper}
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
};

export default Button;
