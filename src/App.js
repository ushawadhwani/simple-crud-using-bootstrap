import { BrowserRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import LeftMenu from "./components/leftMenu";
import MyRouting from "./components/MyRouting";
let menu = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about" },
  { label: "Employee", url: "/employees" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <LeftMenu items={menu} />
        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid"></div>
          </nav>
          <MyRouting />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
