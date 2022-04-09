import "./App.css";
import { Homepage } from "./pages/pages";
import { RouterWrapper } from "./router/RouterWrapper";

function App() {
  return (
    <div className="App">
      <RouterWrapper>
        <Homepage />
      </RouterWrapper>
    </div>
  );
}

export default App;

