import { BrowserRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import LeftMenu from "./components/leftMenu";
import MyRouting from "./components/MyRouting";
let menu = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about" },
  { label: "Dashboard", url: "/dashboard" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <LeftMenu items={menu} />
        <div id="content">
          <MyRouting />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
