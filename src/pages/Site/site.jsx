import jpIMG from '../../assests/Logo-Lanchonete.png';
import coxinha from '../../assests/coxinha2.png'
import { useEffect } from "react";
import './site.css'
import { Link } from 'react-router-dom';
import bolo from '../../assests/bolo.png';
import refri from '../../assests/refrigerantes.png';
import salgados from '../../assests/bolinho_de_queijo.png';
import face from '../../assests/logo_facebook.png';
import insta from '../../assests/logo_instagram.png';
export const Zilda = () => {
    useEffect(() => {
        document.title = 'Zilda';
    });

    return (
        <>
        <header>
            <div className="flex-container menu">
                <div><img src={jpIMG} alt="Logo" /></div>
                <ul className="list-items">
                    <li><Link className='link' to='/login'>Cardápio</Link></li>       
                    <li><Link className='link' to='/login'>Login</Link></li>
                    <li><Link className='link' to='/register'>Cadastro</Link></li>
                    <a className='link' href="#localizacao">Localizacao</a>
                </ul>
            </div>
           </header>
           <body>
            <div className='flex-container quem-somos'>
            <h1>Quem somos</h1>
                <p> Somos uma loja delivery que vendo tudo que é necessário para a sua festa!  
                </p>
                <img src={coxinha} alt="coxinha" />
            </div>  
            <div className='menu'>
                <h2>Ficou com vontade? Venha dar uma olhada nos nossos produtos!</h2>
                <div className='comboxSite'>
                    <h3>Bolos</h3>
                    <img src={bolo} alt="bolo" />
                </div>
                <div className='comboxSite'>
                    <h3>Salgados</h3>
                    <img src={salgados} alt="salgados" />
                </div>
                <div className='comboxSite'>
                    <h3>Refrigerantes</h3>
                    <img src={refri} alt="refri" />
                </div>
            </div>
            <div className='localizacao' id='localizacao'>
                <h2>Localização</h2>
                <iframe className='loc' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234114.4115905254!2d-47.12383556718747!3d-23.531147099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01460b9de951%3A0x24f3f9a2e1457b5a!2sZilda%20Salgados!5e0!3m2!1spt-BR!2sbr!4v1668815845579!5m2!1spt-BR!2sbr"></iframe>
            </div>
           </body>
        </>
           
    

    );
}
