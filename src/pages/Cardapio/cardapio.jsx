import { useEffect } from "react";
import './cardapio.css';
import jpIMG from "../../assests/botao-de-menu.png";
import coxinha from '../../assests/coxinha2.png'
import mais from '../../assests/mais.png';

export const Cardapio = () => {
    useEffect(() => {
        document.title = 'Cardapio';
    });

    return (
        <>
            <body>
                <div className="top">
                    <h1>Cardápio</h1>
                </div>
                <div className="img-menu">
                    <img src={jpIMG} alt="menu" />
                </div>
                <div className="set">
                    
                </div>
            </body>

        </>
    );
}




