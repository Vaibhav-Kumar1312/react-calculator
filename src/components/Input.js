import classes from "./Input.module.css";
const Input = ({ text, result }) => {
  return (
    <div className={classes.inputWrapper}>
      <div className={classes.result}>
        <h1>{result}</h1>
      </div>

      <div className={classes.text}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
