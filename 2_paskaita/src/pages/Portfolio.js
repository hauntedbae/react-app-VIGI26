import "./Portfolio.css"; // 2.
import Hero from "../components/Hero/Hero";
import CustomButton from "../components/CustomButton/CustomButton";
import Card from "../components/Card/Card";

// 1. Susikurti const su tokiu pat kaip failo pavadinimu pvz kaip Portfolio
// 2. Prisideti css faila
// 3. Iseksportuoti const
// 4. Index.js faile pasikeisti i is app i savo sukurta pvz Portfolio:
// root.render(
//  <React.StrictMode>
//  <Portfolio />
//</React.StrictMode>
//);

// 1.
const Portfolio = () => {
  const portfolioItems = [
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.iE2_plfEW7mXjU97TCyyWwHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Pirmas item",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.iE2_plfEW7mXjU97TCyyWwHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Pirmas item",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.iE2_plfEW7mXjU97TCyyWwHaFj?w=226&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Pirmas item",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.ek_hmegBheRzbdKmnQrRUAHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Pirmas item",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.ek_hmegBheRzbdKmnQrRUAHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Pirmas item",
    },
    {
      imageUrl:
        "https://th.bing.com/th/id/OIP.ek_hmegBheRzbdKmnQrRUAHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7",
      text: "Pirmas item",
    },
  ];
  return (
    <div>
      <Hero
        title="Title"
        subtitle="Some about text in two lines"
        color="green"
        className="center"
      >
        <CustomButton variant="Button">Press me</CustomButton>
      </Hero>
      <div className="container center">
        <h2>Portfolio</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum
          tortor at mi imperdiet dignissim. Donec faucibus nunc in mattis
          laoreet. Aliquam eros velit, porta non tellus a, finibus malesuada
          libero.
        </p>
        <div className="cards">
          {portfolioItems.map((item) => (
            <Card imageUrl={item.imageUrl} text={item.text} className="card" />
          ))}
        </div>
      </div>
    </div>
  );
};

// 3.
export default Portfolio;
