import jpIMG from '../../assests/Logo-Lanchonete.png';
import coxinha from '../../assests/coxinha2.png'
import instagram from '../../assests/logo_instagram.png'
import facebook from '../../assests/logo_facebook.png'
import { useEffect } from "react";
import './site.css'
import { Link } from 'react-router-dom';
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
                    <li><Link className='link' to='/cardapio'>Cardápio</Link></li>       
                    <li><Link className='link' to='/login'>Login</Link></li>
                    <li><Link className='link' to='/register'>Cadastro</Link></li>
                    <li><Link className='link' to='#'>Sistema</Link></li>
                </ul>
            </div>
           </header>
           <body>
            <div className='flex-container quem-somos'>
            <h1>Quem somos</h1>
                <p>a;lkjgalkjgaopgjaoijgaogjajgaoijgakgnamngajkngangiagaoignaognoangaongaignakngaoghaignaignagnao
                    gknaignaignaignaignaignaognaignaingoagnoaignaoginagoianoginaiogaiognaoingaingaongaongaongoang
                    aongiangiaongoaigniaongon
                </p>
                <img src={coxinha} alt="coxinha" />
            </div>  
            <div className='flex-container localize'>

            </div>
           </body>
           <footer>
            <div className='flex-container menu-footer'>
                
            </div>
           </footer>
        </>
           
    

    );
}
