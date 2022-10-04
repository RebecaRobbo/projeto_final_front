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
                <div className="flex-container top">
                    <h1>Cardápio</h1>
                    <img src={jpIMG} alt="menu" />
                </div>
                <div className="flex-container set">
                    <div className="coxinha">
                    </div>
                    <div className="bolinho-de-queijo">
                    </div>
                    <div className="pastel">
                    </div>
                    <div>
                    </div>
                </div>
            </body>

        </>
    );
}




