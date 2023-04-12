import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "../pages/Menu/menu";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";
import {Zilda} from "../pages/Site/site";
import { Delivery } from "../pages/Delivery/delivery";
import { TimeDelivery } from "../pages/TimeDelivery/timeDelivery";
import {Pagamento} from "../pages/Pay/pagamento";


export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/zilda" element={<Zilda/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/timeDelivery" element={<TimeDelivery/>}/>
                <Route path="/pagemento" element={<Pagamento/>}/>
            </Routes>
        </Router>
    );

}