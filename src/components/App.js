import Navigator from "./Navigator";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import "./App.css";

function App() {
  return (
    <div className="App bg-black font-outfit">
      <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          <div className="py-4 mx-4 md:mx-6">
            <BrowserRouter>
              <Navigator />
              <div>
                <Routes>
                  <Route path="/" element={<Home />} exact />
                  <Route path="/Shop" element={<Shop />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                </Routes>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <img src={logo} className="App-logo" alt="logo" />
export default App;
