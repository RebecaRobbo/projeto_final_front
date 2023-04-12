import { useEffect } from "react";
import "./pagamento.css";
import logo from '../../assests/Logo-Lanchonete.png';
export const Pagamento = () => {
    useEffect(() => {
        document.title = 'Pagamento';
    });
    return(
        <div className="main">
            <div className="top">
            <h1>Tela de pagamento</h1>
            <img src={logo} className="logo" alt="logo" />
            </div>

            <div className="container">
                <div className="combox">
                <h2>Cartão</h2>
                <input  />
                <span className='focus-input' data-placeholder='Número do cartão'></span>
                <input />
                <span className='focus-input' data-placeholder='Data de válidade'></span>
                <input />
                <span className='focus-input' data-placeholder='Nome'></span>
                <input />
                <span className='focus-input' data-placeholder='Código de segurança'></span>
                </div>           

                <div className="combox">
                    <h2>Pix</h2>
                    <h3>Chave pix: </h3>
                    <h4>Nome: Zilda Salgados</h4>
                    <h4>Conta: 03202-0</h4>
                    <h4>Ag: 0392</h4>
                    <h4>Banco: Itau</h4>
                </div>

                <div className="combox">
                    <h2>Boleto bancário</h2>
                </div>
            </div>
        </div>
    );
}