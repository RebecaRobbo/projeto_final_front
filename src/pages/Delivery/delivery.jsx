import { useState } from "react";
import { useEffect } from "react";

export const Delivery = () => {
    const [Horario, setHorario] = useState([]);
    useEffect(() => {
        document.title = 'Delivery';

        const horario = localStorage.getItem("horario")
        setHorario(JSON.parse(horario) || [])
    },[]);
    
    console.log(JSON.parse(localStorage.getItem("produtos")));
    console.log(JSON.parse(localStorage.getItem("horario")));
    return (
        <>
            <body>
                <div className="top">
                    <h1>Retirada do pedido</h1>
                </div>
                <p>Horário da retirada: </p>
                {Horario.map((hora) => {
                    return (
                        <p>{hora}</p>
                    )
                })}
            </body>
        </>
    );
}