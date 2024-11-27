import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nome from "./Pages/Nome/Nome";
import Pontos from "./Pages/Pontos/Pontos";

import Video1 from "./Components/Video/Video1";
import Video2 from "./Components/Video/Video2";

export default function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nome" element={<Nome />} />
          <Route path="/pontos" element={<Pontos/>} />
          <Route path="/video1" element={<Video1/>} />
          <Route path="/video2" element={<Video2/>} />
        </Routes>
      </Router>





    </>
  )
}


