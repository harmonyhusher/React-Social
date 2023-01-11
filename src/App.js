import { BrowserRouter } from "react-router-dom";
import Links from "./Links";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMain from "./Components/Navbar/NavbarCool";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarMain />
      </div>
      <div>
        <Links />
      </div>
    </BrowserRouter>
  );
}

export default App;
