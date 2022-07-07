import { useState } from "react";
import CircleSvg from "./components/CircleSvg/CircleSvg";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

function App() {
  const [page, setPage] = useState("Home");
  const [circlePosition, setCirclePosition] = useState("center");
  const [menuPosition, setMenuPosition] = useState("right")

  const handleNav = (page) => {
    setPage(page);
    switch (page) {
      case "Home":
        setCirclePosition("center");
        setMenuPosition("right")
        break;
      case "Work":
        setCirclePosition("left");
        setMenuPosition("left")
        break;
      default:
        setCirclePosition("center");
        setMenuPosition("right");
    }
  };

  return (
    <div className="app">
      <NavBar handleClick={(page) => handleNav(page)} activeLink={page} position={menuPosition}/>
      <CircleSvg position={circlePosition} />
      <Home in={page === "Home"} />
      <Work in={page === "Work"} />
    </div>
  );
}

export default App;
