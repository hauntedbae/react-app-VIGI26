import "./App.css";

// JSX struktura, kuri renderina Javascript + html

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src="https://th.bing.com/th/id/OIP.GiBbfiKkKWNey_woF3Jl_QHaFj?w=222&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
          alt="logo"
        />
        <div className="menu-bar">
          <a href="#home">Home</a>
          <a href="#home">Product</a>
          <a href="#home">Company</a>
          <a href="#home">Contact</a>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
