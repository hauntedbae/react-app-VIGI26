import "./Card.css";

// const isAdult = (age) => {
//     if (age > 18)  {
//         return <div>Is adult</div>
//     }
//     return <div> Is not</div>
// }

// const isAdult1 = (age) => (age > 18 ? <div>Is adult</div> : <div> Is not</div>);
// ? true : false
// && true

const Card = ({ imageUrl, text, className }) => {
  return (
    <div className={`card ${className}`}>
      <img src={imageUrl} alt={text} />
      <p>{text}</p>
      {/* Jeigu tekstas yra ilgesnis nei 10 simbolou atvaizduok paragrafa */}
      {text.length > 10 && <p>You text is too long</p>}
      {/* Jeigu className yra teigiamas pridei "Extra class added" */}
      {className ? <p>Extra class added</p> : <p>No class added</p>}
    </div>
  );
};

export default Card;
