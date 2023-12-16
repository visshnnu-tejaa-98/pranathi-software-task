import "./App.css";
import { Outlet } from "react-router-dom";
// import Counter from "./features/counter/Counter";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
