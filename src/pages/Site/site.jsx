import jpIMG from '../../assests/Logo-Lanchonete.png';
import coxinha from '../../assests/coxinha2.png'
import { useEffect } from "react";
import './site.css'
import { Link } from 'react-router-dom';
import bolo from '../../assests/bolo.png';
import refri from '../../assests/refrigerantes.png';
import salgados from '../../assests/bolinho_de_queijo.png';
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
                    <li><Link className='link' to='/register'>Localização</Link></li>
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
                <div className='combox'>
                    <h3>Bolos</h3>
                    <img src={bolo} alt="bolo" />
                </div>
                <div className='combox'>
                    <h3>Salgados</h3>
                    <img src={salgados} alt="salgados" />
                </div>
                <div className='combox'>
                    <h3>Refrigerantes</h3>
                    <img src={refri} alt="refri" />
                </div>
            </div>
           </body>
           <footer>
            <div className='flex-container menu-footer'>
                
            </div>
           </footer>
        </>
           
    

    );
}
