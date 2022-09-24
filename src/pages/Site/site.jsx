import jpIMG from '../../assests/Logo-Lanchonete.png';
import { useEffect } from "react";
import './site.css'
export const Zilda = () => {
    useEffect(() => {
        document.title = 'Zilda';
    });

    return (
           <header>
            <div className="flex-container menu">
                <div><img src={jpIMG} alt="Logo" /></div>
                <ul className="list-items">
                    <li>Cardápio</li>
                    <li>Login</li>
                    <li>Cadastro</li>
                    <li>Sistema</li>
                </ul>
            </div>
           </header>


    );
}




