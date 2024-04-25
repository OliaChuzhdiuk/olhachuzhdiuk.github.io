import "./App.css";

// Завдання 3

const jsxElement = <h1>I am a JSX element</h1>;

// Завдання 4

const header = (
  <header>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
);

// Завдання 5

const newElement = (
  <>
    <h1>Welcome to React</h1>
    <h2 style={{ color: "red" }}>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </>
);

// Завдання 6
const footer = <p>Copyright &copy; 2024</p>;

function App() {
  return (
    <>
      {jsxElement}
      {header}
      {newElement}
      {footer}
    </>
  );
}

export default App;
