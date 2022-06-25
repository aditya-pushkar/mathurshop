import Headers from "./pages/Headers";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
    <Headers />
    <HomePage />
    <div style={{
      width: "100%",
      backgroundColor: "green",
      height: "700px"
    }}></div>
    </div>
  );
}

export default App;
