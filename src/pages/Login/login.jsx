import { Link } from 'react-router-dom';
import { useState } from 'react';
import jpIMG from '../../assests/Logo-Lanchonete.png'
import { LayoutComponents } from '../../components/LayoutComponents';
import React, { useEffect } from 'react';


export const Login = () => {
    useEffect(() => {
        document.title = 'Login';
      });
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title">Bem vindo!</span>
                <span className="login-form-title">
                    <img src={jpIMG} alt="Logo"></img>
                </span>

                <div className='wrap-input'>
                    <input className={email !== "" ? 'has-val input' : 'input'} typeof='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input'>
                    <input className={password !== "" ? 'has-val input' : 'input'} type='password' value={password} onChange={p => setPassword(p.target.value)} />
                    <span className='focus-input' data-placeholder='Password'></span>
                    <span className="lnr lnr-eye"></span>
                </div>

                <div className='container-login-form-btn'>
                    <button className='login-form-btn'>login</button>
                </div>

                <div className='text-center'>
                    <span className='txt1'>Não possui conta?</span>

                    <Link className='txt2' to='/register'>Criar conta</Link>
                </div>
            </form>
        </LayoutComponents>

    )
}