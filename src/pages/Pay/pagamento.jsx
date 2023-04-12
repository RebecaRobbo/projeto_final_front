import { useEffect } from "react";
import "./pagamento.css";
import logo from '../../assests/Logo-Lanchonete.png';
import qrcode from '../../assests/qrcode.jpeg'
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
                <input className="input" placeholder = "Número do cartão" />
                <input className="input" placeholder="Data de válidade"/>
                <input className="input" placeholder="Nome"/>
                <input className="input" placeholder="Código de segurança"/>
                <button className="login-form-btn">Enviar</button>
                <button className="login-form-btn">Salvar</button>
                </div>           

                <div className="combox">
                    <h2>Pix</h2>
                    <img src={qrcode} alt="qrcode" className="qrcode"/>
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