import { Routes,Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";


function App() {
  return (
    <div className="bg-home-bg  bg-gradient-pattern flex justify-center items-center h-screen w-screen ">
       <Routes> 
           <Route path="/" element={<Home/>} />
           <Route path="/login" element={<Login/>} />
           <Route path="/register" element={<Register/>} />
       </Routes>
    </div>
  );
}

export default App;
