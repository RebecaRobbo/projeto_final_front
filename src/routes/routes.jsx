import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";
import {Zilda} from "../pages/Site/site"


export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/zilda" element={<Zilda/>}/>
            </Routes>
        </Router>
    );

}