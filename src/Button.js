const Button = (props) => {
  return (
    <button
      style={{ width: "20vw", height: "10vh", fontSize: "20px" }}
      onClick={props.clickHandler}
    >
      {props.children}
    </button>
  );
};

export default Button;
