import React from "react"
import { Route, Routes, BrowserRouter as Router} from "react-router-dom"

import Home from "./Home";
import Briefcase from "./Briefcase";


function App (){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/briefcase" element={<Briefcase />} />
            </Routes>
        </Router>
    )
}

export default App;
