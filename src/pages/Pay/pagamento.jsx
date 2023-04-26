import { useEffect, useState } from "react";
import "./pagamento.css";
import logo from '../../assests/Logo-Lanchonete.png';
import qrcode from '../../assests/qrcode.jpeg'
export const Pagamento = () => {
    const [numeroCartao, setNumeroCartao] = useState("");
    const [data, setData] = useState("");
    const [codSeg,setCodSeg] = useState("");
    const[nome,setNome] = useState("");
    const [numeroCartaoD, setNumeroCartaoD] = useState("");
    const [dataD, setDataD] = useState("");
    const [codSegD,setCodSegD] = useState("");
    const[nomeD,setNomeD] = useState("");
    useEffect(() => {
        document.title = 'Pagamento';
    });

    function salvar() {
        debugger
        if(numeroCartao !== "" && nome !=="" && codSeg !=="" && codSeg !==""){
            alert("Pagamento realizado com sucesso!");
            window.open('http://localhost:3000/timeDelivery','self')
            
        }else if(numeroCartao.length < 20 ){
            alert("Número do cartão inválido")
        }else if(data.length < 4){
            alert("Data de vencimento do cartão inválido")
        }else{
            alert("Pagamento invalido, campo vazio")
        }
      
    }
    function pix() {
        debugger
       alert("Um momento!")
       alert("Pagamento realizado com sucesso!");
       window.open('http://localhost:3000/timeDelivery','self')
    }
    function salvarDebito() {
        debugger
        if(numeroCartao !== "" && nome !=="" && codSeg !=="" && codSeg !==""){
            alert("Pagamento realizado com sucesso!");
            window.open('http://localhost:3000/timeDelivery','self')
            
        }else if(numeroCartao.length < 20 ){
            alert("Número do cartão inválido")
        }else if(data.length < 4){
            alert("Data de vencimento do cartão inválido")
        }else{
            alert("Pagamento invalido, campo vazio")
        }
      
    }
    return(
        <div className="main">
            <div className="top">
            <h1>Tela de pagamento</h1>
            <img src={logo} className="logo" alt="logo" />
            </div>

            <div className="container">
                <div className="combox">
                    <h2>Crédito</h2>
                    <input className="input" minLength={20} maxLength={20} onChange={e => setNumeroCartao(e.target.value)} placeholder = "Número do cartão" />
                    <input className="input" minLength={4} maxLength={5} onChange={e => setData(e.target.value)} placeholder="Data de válidade"/>
                    <input className="input" onChange={e => setNome(e.target.value)} placeholder="Nome"/>
                    <input className="input" minLength={3} maxLength={3} onChange={e => setCodSeg(e.target.value)} placeholder="Código de segurança"/>
                    <button className="login-form-btn" onClick={salvar}>Enviar</button>
                </div>           
                <div className="combox">
                    <h2>Débito</h2>
                    <input className="input" minLength={20} maxLength={20} onChange={e => setNumeroCartaoD(e.target.value)} placeholder = "Número do cartão" />
                    <input className="input" minLength={4} maxLength={5} onChange={e => setDataD(e.target.value)} placeholder="Data de válidade"/>
                    <input className="input" onChange={e => setNomeD(e.target.value)} placeholder="Nome"/>
                    <input className="input" minLength={3} maxLength={3} onChange={e => setCodSegD(e.target.value)} placeholder="Código de segurança"/>
                    <button className="login-form-btn" onClick={salvarDebito}>Enviar</button>
                </div>
                <div className="combox">
                    <h2>Pix</h2>
                    <img src={qrcode} alt="qrcode" className="qrcode"/>
                    <h3>Chave pix: </h3>
                    <h4>Nome: Zilda Salgados</h4>
                    <h4>Conta: 03202-0</h4>
                    <h4>Ag: 0392</h4>
                    <h4>Banco: Itau</h4>
                    <button className="login-form-btn" onClick={pix} >Feito</button>
                </div>
            </div>
        </div>
    );
}