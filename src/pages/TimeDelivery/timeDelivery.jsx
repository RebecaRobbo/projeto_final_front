
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
                    <div className="combox-time"> <Link className="link" onClick={() => adicionaHorario("18:00")} to='/delivery'>18:00 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("18:30")} to='/delivery'>18:30 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("19:00")} to='/delivery'>19:00 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("19:30")} to='/delivery'>19:30 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("20:00")} to='/delivery'>20:00 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("20:30")} to='/delivery'>20:30 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("21:00")} to='/delivery'>21:00 horas</Link></div>
                    <div className="combox-time"> <Link  className="link" onClick={() => adicionaHorario("21:30")} to='/delivery'>21:30 horas</Link></div>
                </div>
            </body>
        </>
    );
}