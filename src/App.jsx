import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import Home from "./components/Home/Home";

function App() {



    return <div className='main_container'>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<PersonDetail />} />
        </Routes>
    </div>;
}

export default App;
