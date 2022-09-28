import "./App.css";
import Button from "./components/Button/Button";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import CustomButton from "./components/CustomButton/CustomButton";
import Avatar from "./components/Avatar/Avatar";

function App() {
  // const names = ["Rokas", "Tomas", "Romas", "Jonas", "Gedas", "Greta"];

  // const fruits = [
  //   "Apple",
  //   "Banana",
  //   "Orange",
  //   "Kiwi",
  //   "Pineapple",
  //   "Strawberries",
  //   "Berries",
  // ];

  // const colors = ["Red", "Green", "Blue", "Yellow"];

  const names = ["H", "N", "OP"];

  return (
    <div className="container">
      {names.map((name) => (
        <Avatar>{name}</Avatar>
      ))}
    </div>

    // <div className="container">
    //   <CustomButton>Rokas</CustomButton>
    //   <CustomButton>Tomas</CustomButton>
    //   <CustomButton>Romas</CustomButton>
    //   <hr />
    //   {names.map((name) => (
    //     <CustomButton>{name}</CustomButton>
    //   ))}

    //   {[1, 2, 3, 4, 5, 6].map((number) => (
    //     <div>Numeris {number}</div>
    //   ))}
    //   <ul>
    //     {fruits.map((fruit) => (
    //       <li>{fruit}</li>
    //     ))}
    //   </ul>

    //   <ol>
    //     {colors.map((color) => (
    //       <li>Spalva {color}</li>
    //     ))}
    //   </ol>

    //   {colors.map((color) => (
    //     <Hero
    //       // title={color}
    //       subtitle={`Mano megstamiausia spalva yra ${color}`}
    //       color={color}
    //     />
    //   ))}

    //   {colors.map((color) => (
    //     <Button text={color} bgColor={color} />
    //   ))}

    //   <div className="center">
    //     <CustomButton>Paspausk mane!</CustomButton>
    //     <br />
    //     <br />
    //     <CustomButton variant="contained">+100$</CustomButton>
    //   </div>
    //   Rima
    //   <div className="buttons">
    //     <Button text="Say hello" type="button" />
    //     <Button text="Click me" type="submit" />
    //     <Button text="Delete" bgColor="red" />
    //   </div>
    //   <Button text="Green button" bgColor="green" />
    //   <Hero
    //     title="Info hero"
    //     subtitle="Info subtitle"
    //     color="blue"
    //     className="center"
    //   />
    //   <Hero title="Info hero" subtitle="Info subtitle" color="green" />
    //   <Hero title="Info hero" subtitle="Info subtitle" color="red">
    //     <div className="center">
    //       <Button text="Green button" bgColor="red" />
    //     </div>
    //   </Hero>
    //   <div className="car-card-mini">
    //     <Card
    //       imageUrl="https://th.bing.com/th/id/OIP.xiSwDvbVnDzYLEwgAtgI1AHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    //       text="Lamborghini"
    //     />
    //   </div>
    //   <div className="car-card-medium">
    //     <Card
    //       imageUrl="https://th.bing.com/th/id/OIP.xiSwDvbVnDzYLEwgAtgI1AHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    //       text="Lamborghini"
    //     />
    //   </div>
    //   <Card
    //     imageUrl="https://th.bing.com/th/id/OIP.xiSwDvbVnDzYLEwgAtgI1AHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    //     text="Lamborghini"
    //     className="car-card-mini"
    //   />
    // </div>
  );
}

export default App;
