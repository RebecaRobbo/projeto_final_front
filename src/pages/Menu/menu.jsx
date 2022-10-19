import { useEffect } from "react";
import './menu.css';
import jpIMG from "../../assests/web-house.png";
import coxinha from '../../assests/coxinha2.png'
import mais from '../../assests/mais.png';
import bolinho from '../../assests/bolinho_de_queijo.png';
import pastel from '../../assests/pastel.png';
import risole from '../../assests/risole.png';
import enroladiho from '../../assests/enroladinho.png';
import bolo from '../../assests/bolo.png';
import refri from '../../assests/refrigerantes.png';
import brigadeiro from '../../assests/brigadeiro.png';
import beijinho from '../../assests/beijinho.png'
import vela from '../../assests/vela.png'
import { Link } from "react-router-dom";

export const Menu = () => {
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
                    <Link to='/zilda'><img src={jpIMG} alt="menu" /></Link>
                </div>
                <div className="set">
                    <div className="combox">
                        <div className="coxinha">
                            <h3>Coxinha</h3>
                            <img src={coxinha} alt="coxinha" />
                            <p>10 unidades</p>
                            <h4>R$10,00</h4>
                            <div className="btnPlus">
                                <img src={mais} alt="mais" />
                            </div>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="bolinho-de-queijo">
                            <h3>Bolinho de queijo</h3>
                            <img src={bolinho} alt="bolinho de queijo" />
                            <p>10 unidades</p>
                            <h4>R$15,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="pastel-de-queijo">
                            <h3>Pastel de queijo</h3>
                            <img src={pastel} alt="pastel de queijo" />
                            <p>10 unidades</p>
                            <h4>R$20,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="risole">
                            <h3>Risole</h3>
                            <img src={risole} alt="risole" />
                            <p>10 uniades</p>
                            <h4>R$15,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="enroladinho">
                            <h3>Enroladinho</h3>
                            <img src={enroladiho} alt="enroladinho de salsicha" />
                            <p>10 unidades</p>
                            <h4>R$20,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="bolo">
                            <h3>Bolo de aniversário</h3>
                            <img src={bolo} alt="bolo de aniversário" />
                            <p>Cada 1 quilo</p>
                            <h4>R$30,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="refri">
                            <h3>Refrigerantes</h3>
                            <img src={refri} alt="refrigerantes" />
                            <p>1 litro</p>
                            <p className="p2"> 1 lata</p>
                            <h4>R$10,00</h4>
                            <h4 className="h42">R$4,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="brigadeiro">
                            <h3>Brigadeiro</h3>
                            <img src={brigadeiro} alt="brigadeiro" />
                            <p>10 unidades</p>
                            <h4>R$20,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="beijinho">
                            <h3>Beijinho</h3>
                            <img src={beijinho} alt="beijinho" />
                            <p>10 unidades</p>
                            <h4>R$20,00</h4>
                        </div>
                    </div>
                    <div className="combox">
                        <div className="vela">
                            <h3>Vela</h3>
                            <img src={vela} alt="vela" />
                            <p>A unidade</p>
                            <h4>R$10,00</h4>
                        </div>
                    </div>
                </div>
                <div className="btnEnviar">
                    <button>Save</button>
                </div>
                <div className="btnCanc">
                    <button>Cancel</button>
                </div>
            </body>

        </>
    );
}




