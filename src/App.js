// import logo from './logo.svg';

import { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/alert";
import "./App.css";
import About from "./components/about";
import Textform from "./components/Textform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
     
     const [mode, setMode] = useState("light");
     const [alert, setAlert] = useState(null);
      
     const showalert = (message, type) => {
          setAlert({
               msg: message,
               type: type,
          });
          setTimeout(() => {
               setAlert(null);
          }, 3000);
     };

     const togglemode = (cls) => {
          if (mode === "light") {
               setMode("dark");
               document.getElementById("textmode").innerHTML =
                    "Enable lightMode";
               document.body.style.backgroundColor = "black";
               showalert("Dark mode is successfully Enable", "success");
          } else {
               setMode("light");
               document.getElementById("textmode").innerHTML =
                    "Enable DarkMode";
               document.body.style.backgroundColor = "white";
               showalert("Light mode is successfully Enable", "success");
          }
     };

     return (
          <Router>
               <>
                    <Navbar
                         title="FontFlipper"
                         about="About"
                         mode={mode}
                         toggleMode={togglemode}
                    />
                    <Alert alert={alert} />

                    <div className="container my-5">
                         <Routes>
                              <Route exact path="/about" element={<About mode={mode}/>} />

                              <Route
                                   exact
                                   path="/"
                                   element={
                                        <Textform
                                             showalert={showalert}
                                             hading="Enter the text Below"
                                             mode={mode}
                                        />
                                   }
                              />
                         </Routes>
                    </div>
               </>
          </Router>
     );
}

export default App;
