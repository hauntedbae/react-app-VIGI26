import "./Avatar.css";

const Avatar = ({ variant, children }) => {
  const variantType = variant === "N" ? "N" : "H";
  return <button className={`custom-button ${variantType}`}>{children}</button>;
};

export default Avatar;
