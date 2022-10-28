
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assests/Logo-Lanchonete.png';
import './timeDelivery.css'

export const TimeDelivery = () => {
    useEffect(() => {
        document.title = 'TimeDelivery';
    });
    const adicionaHorario = (horas) => {
        const horario = {
            horas: horas
        };
        localStorage.setItem("horario", JSON.stringify(horario));
        console.log(horario)

    }
    return (
        <>
            <body>
                <div className="top-time">
                <img src={Logo} alt="logo" className="logo"/>
                <h1>Gostaria de marcar um horário para retirada?</h1>
                <h2>Horários disponiveis: </h2>
                </div>
                <div className="container">
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("18")}>18 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("18:30")}>18:30 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("19")}>19 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("19:30")}>19:30 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("20")}>20 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("20:30")}>20:30 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("21")}>21 horas</h1></div>
                    <div className="combox-time"> <h1 onClick={() => adicionaHorario("21:30")}>21:30 horas</h1></div>
                </div>
                <Link className="btnSend" to="/delivery">Send</Link>
            </body>
        </>
    );
}