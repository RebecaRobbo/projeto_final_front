
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assests/Logo-Lanchonete.png'

export const TimeDelivery = () => {
    useEffect(() => {
        document.title = 'TimeDelivery';
    });
    const adicionaHorario = (horas) => {
        debugger
        const horario = {
            horas: horas
        };
        if (localStorage.getItem("horario") != null) {
            const horarios = JSON.parse(localStorage.getItem("horario"));
            for (let i = 0; i <= horarios.length; i++) {
                const el = horarios;
                if (el.horas == horario.horas) {
                    console.log(horario)
                }
            }
            localStorage.setItem("horario", JSON.stringify(horarios));
        }else {
            localStorage.setItem("horario", JSON.stringify(horario));
        }

    }
    return (
        <>
            <body>
                <img src={Logo} alt="logo" />
                <h1>Gostaria de marcar um horário para retirada?</h1>
                <p>Horários disponiveis: </p>
                <form method="post" action="registerTime">
                    <select name="time">
                        <option value="selected">Selected</option>
                        <option value="18" onClick={() => adicionaHorario("18:00")}>18:00</option>
                        <option value="18:30" onClick={() => adicionaHorario("18:30")}>18:30</option>
                        <option value="19" onClick={() => adicionaHorario("19:00")}>19:00</option>
                        <option value="19:30" onClick={() => adicionaHorario("19:30")}>19:30</option>
                        <option value="20" onClick={() => adicionaHorario("20:00")}>20:00</option>
                        <option value="20:30" onClick={() => adicionaHorario("20:30")}>20:30</option>
                        <option value="21" onClick={() => adicionaHorario("21:00")}>21:00</option>
                        <option value="21:30" onClick={() => adicionaHorario("21:30")}>21:30</option>
                    </select>
                </form>
                <Link className="btnSend" to="/delivery">Send</Link>
            </body>
        </>
    );
}