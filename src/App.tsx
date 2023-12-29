import { NavBar } from "./components/NavBar";
import "./App.css";
import { Button } from "./components/Button";
import { Home } from "./pages/Home";

function App() {
  const mainItems = ["Home", "About", "Work", "Resume", "Contact"];
  const handleSelectItem = (item: string) => {};

  return <Home />;
}

export default App;
