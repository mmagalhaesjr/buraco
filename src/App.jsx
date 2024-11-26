import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nome from "./Pages/Nome/Nome";
import Pontos from "./Pages/Pontos/Pontos";

export default function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nome" element={<Nome />} />
          <Route path="/pontos" element={<Pontos/>} />
        </Routes>
      </Router>





    </>
  )
}


