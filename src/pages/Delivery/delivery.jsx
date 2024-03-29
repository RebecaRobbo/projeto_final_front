import { useState } from "react";
import { useEffect } from "react";
import Logo from '../../assests/Logo-Lanchonete.png';

export const Delivery = () => {
    const [horarios, setHorarios] = useState([]);
    const [produtos, setProdutos] = useState([]);
    var produto = localStorage.getItem("produtos");
    var horario = localStorage.getItem("horario");
    useEffect(() => {
        document.title = 'Delivery';
        
        setHorarios(JSON.parse(horario) || []);
        setProdutos(JSON.parse(produto) || []);
    }, [produto]);

    var result = Object.entries(horarios);
    var resultP = produtos;
    var cont = 0;
    var produtosLength = produtos.length;

    while (produtosLength >= cont) {
        var prd = produtos[cont]
        var strPrd = JSON.stringify(prd);
        cont += 1;
    }
    var data = new Date();
    var horaAtual = parseInt(data.toLocaleTimeString());
    var horaEscolhida = parseInt(horarios.horas);
    var calculaHora = 0;
    if(horaAtual > horaEscolhida){
        alert("Já passou do horário de retirada do seu pedido");
    }else if(horaEscolhida > horaAtual){
        calculaHora = horaEscolhida - horaAtual;
        console.log(calculaHora);
    }else if(horaAtual === horaEscolhida){
        alert("A hora para retirar o seu pedido está perta, fique atendo!");
    }
        return (
            <>
                <div className="top-time">
                    <h1>Retirada do pedido</h1>
                    <img src={Logo} alt="logo" />
                </div>
                <h3>Horário de retirada</h3>
                <br />
                {result.map((hora) => {
                    return (
                        <div key={hora[0]}>
                            <p>{hora[1]}</p><br />
                        </div>
                    )
                })}
                <h3>Pedido:</h3><br />
                <p>{produto}</p>
                {resultP.map((batata) => {
                    return (
                        <div key={batata[0]}>
                            <p>{batata[0]}</p> <br />
                        </div>
                    )
                })}
                <h3>Localização</h3><br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234114.4115905254!2d-47.12383556718747!3d-23.531147099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01460b9de951%3A0x24f3f9a2e1457b5a!2sZilda%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1668815845579!5m2!1spt-BR!2sbr"></iframe>
            </>
        );
        
    
    }
