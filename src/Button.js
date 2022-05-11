const Button = ({ onClick, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      style={{ width: "20vw", height: "10vh", fontSize: "20px" }}
    >
      {children}
    </button>
  );
};

export default Button;
