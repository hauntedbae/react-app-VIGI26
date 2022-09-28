import "./CustomButton.css";

const CustomButton = ({ variant, children }) => {
  //   if (variant === "contained") {
  //     return <button className="custom-button contained">Contained</button>;
  //   } else {
  //     return <button className="custom-button outlined">Outlined</button>;
  //   }
  const buttonType = variant === "contained" ? "contained" : "outlined";
  return <button className={`custom-button ${buttonType}`}>{children}</button>;

  //   return (
  //     <button
  //       className={`custom-button ${
  //         variant === "contained" ? "contained" : "outlined"
  //       }`}
  //     ></button>
  //   );
};

export default CustomButton;
