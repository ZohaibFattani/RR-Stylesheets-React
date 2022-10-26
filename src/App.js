import "./style"

const headerStyle = {
  fontSize: "50px",
  textAlign: "center",
  margin: "40px",
  border: "10px solid red",
};

const styleText = {
  fontSize: "25px",
  textAlign: "center",
  border: "5px solid blue",
}

const formStyle = {
  fontSize: "25px",
  border: "5px solid green",
}

function App() {
  return (
    <div className="App">
      <h1 style={headerStyle}>Welcome to My Portfolio</h1>
      <p style={styleText}>My Favorite Foods</p>
      <form style={formStyle}>
        <ol>
          <li>Pizza</li>
          <li>Burger</li>
          <li>Cookie</li>
        </ol>
      </form>
    </div>
  );
}

export default App;
