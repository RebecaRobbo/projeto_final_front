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
    const adicionarProduto = (nome, valor) => {
        const produto = {
            nome: nome,
            valor: valor,
        };
        if (localStorage.getItem("produtos") != null) {
            const produtos = JSON.parse(localStorage.getItem("produtos"));
            for (let i = 0; i < produtos.length; i++) {
                const el = produtos[i];
                console.log(el.nome == produto.nome);
                if (el.nome == produto.nome) {
                    console.log("sim é", el.nome, nome);
                    el.valor += valor;
                } else {
                    console.log("não é", el.nome, nome);

                    produtos.push(produto);
                }
            }
            // atualiza a lista de produtos
            localStorage.setItem("produtos", JSON.stringify(produtos))
        } else {
            localStorage.setItem("produtos", JSON.stringify([produto]));
        }
    }
    const removerProdutos = (nome, valor) => {
        localStorage.removeItem("produtos");
    }
    return (
        <div className="main">
            <div className="top">
                <h1>Cardápio</h1>
                <Link className="img-menu" to='/zilda'><img src={jpIMG} alt="menu" /></Link>
            </div>

            <div className="container">
                <div className="combox">
                    <h3>Coxinha</h3>
                    <img src={coxinha} alt="coxinha" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$10,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Coxinha", 10)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Bolinho de queijo</h3>
                    <img src={bolinho} alt="bolinho de queijo" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$15,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Bolinho de queijo", 15)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Pastel de queijo</h3>
                    <img src={pastel} alt="Pastel de queijo" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$20,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Pastel de queijo", 20)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Risole</h3>
                    <img src={risole} alt="Risole" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$15,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Risole", 15)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Enroladinho</h3>
                    <img src={enroladiho} alt="enroladinho de salsicha" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$15,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Enroladinho", 15)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Bolo de aniversário</h3>
                    <img src={bolo} alt="Bolo de aniversário" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <p>Cada 1 quilo</p>
                        <h4>R$30,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Bolo", 30)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Beijinho</h3>
                    <img src={beijinho} alt="beijinho" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$20,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Beijinho", 20)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Brigadeiro</h3>
                    <img src={brigadeiro} alt="brigadeiro" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <h4>R$20,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Brigadeiro", 20)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Vela</h3>
                    <img src={vela} alt="vela" />
                    <p>A unidade</p>
                    <div className="footer-combox">
                        <h4>R$10,00</h4>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Vela", 10)} />
                    </div>

                </div>
                <div className="combox">
                    <h3>Refrigerantes</h3>
                    <img src={refri} alt="refrigerantes" />
                    <p>10 unidades</p>
                    <div className="footer-combox">
                        <p>1 litro</p>
                        <p>R$10,00</p>
                        <p>1 lata</p>
                        <p>R$4,00</p>
                        <img src={mais} alt="mais" onClick={() => adicionarProduto("Refrigerantes", 10)} />
                    </div>

                </div>
            </div>

            <footer className="footer">
                <button className="btnEnviar" type="button">Salvar</button>
                <button className="btnCanc" onClick={() => removerProdutos()} type="button">Cancelar</button>
            </footer>


        </div>
    );
}




