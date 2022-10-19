import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assests/Logo-Lanchonete.png'

export const TimeDelivery = () => {
    useEffect(() => {
        document.title = 'TimeDelivery';
    });
    return (
        <>
            <body>
                    <img src={Logo} alt="logo" />
                    <h1>Gostaria de marcar um horário para retirada?</h1>
                    <p>Horários disponiveis: </p>
                    <form method="post" action="registerTime">
                        <select name="time">
                            <option value="none">None</option>
                            <option value="18">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21">21:00</option>
                            <option value="21:30">21:30</option>
                        </select>
                    </form>
                    <Link className="btnSend" to="/delivery">Send</Link>
            </body>
        </>
    );
}