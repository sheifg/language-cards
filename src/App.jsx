import "./App.scss";
import reactImage from "../src/assets/react.svg";


import Menu from "./components/Menu";
import MenuCards from "./components/MenuCards";

function App() {
  return (
    <>
      <img src={reactImage} alt="logo" className="top-img" />
      <Menu>
        <div className="top-menu">Languages</div>
        {/* To create the bar(blue line) in the background */}
        <div className="bar"></div>
        <MenuCards/>
      </Menu>
    </>
  );
}

export default App;
