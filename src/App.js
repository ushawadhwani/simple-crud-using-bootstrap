import { BrowserRouter, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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
      <LeftMenu items={menu} />
      <MyRouting />
    </BrowserRouter>
  );
}

export default App;
