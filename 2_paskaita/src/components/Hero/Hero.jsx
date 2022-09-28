import "./Hero.css";

const Hero = ({ title, subtitle, color, children, className }) => {
  const heroClassName = () => {
    switch (color) {
      case "red":
        return "red-hero";
      case "blue":
        return "blue-hero";
      case "green":
        return "green-hero";
      default:
        return "white-hero";
    }
  };

  // if (!title && !subtitle) {
  //   return null;
  // }

  return (
    <div className={`${heroClassName()} ${className}`}>
      {/* su ternary operatoriais ? : arba && */}
      {/* Jeigu title nera, nesukurk h1 */}
      {title && <h1>{title}</h1>}
      {/* Jeigu subtitle nera, nesukurk h2*/}
      {subtitle && <h2>{subtitle}</h2>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default Hero;
