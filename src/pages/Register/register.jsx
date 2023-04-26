import { useState, useEffect } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import jpIMG from '../../assests/Logo-Lanchonete.png';
import { Link } from 'react-router-dom';
import axios from "axios";

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [autenthPassword, setautenthPassword] = useState("")

    useEffect(() => {
        document.title = 'Register';
    });

    function salvar() {
        debugger
        if (password !== autenthPassword || password === "" || autenthPassword === "") {
            alert("As senhas não coincidem, ou não foram preenchidas");
        } else if (password === autenthPassword) {
            axios.post(
                'http://localhost:8081/api/register',
                {
                    email: email,
                    password: password,
                    name: name,
                    lastName: lastName
                }
            ).then((response) => { alert("Cadastro realizado") 
            window.open('http://localhost:3000/menu','self')})
                .catch((error) => console.log(error))

        }
    }
    return (
        <LayoutComponents>
            <form className="login-form" onSubmit={event => {
                event.preventDefault();
                salvar();
            }}>
                <span className="login-form-title">Criar Conta</span>
                <span className="login-form-title">
                    <img src={jpIMG} alt="Logo"></img>
                </span>

                <div className="camposCadastro">
                    <div >
                        <div className='wrap-input'>
                            <input className={name !== "" ? 'has-val input' : 'input'} typeof='name' value={name} onChange={e => setName(e.target.value)} />
                            <span className='focus-input' data-placeholder='Nome'></span>
                        </div>

                        <div className='wrap-input'>
                            <input className={lastName !== "" ? 'has-val input' : 'input'} type='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                            <span className='focus-input' data-placeholder='Sobrenome'></span>
                            <span className="lnr lnr-eye"></span>
                        </div>

                        <div className='wrap-input'>
                            <input className={email !== "" ? 'has-val input' : 'input'} typeof='email' value={email} onChange={e => setEmail(e.target.value)} />
                            <span className='focus-input' data-placeholder='Email'></span>
                        </div>

                        <div className='wrap-input'>
                            <input className={password !== "" ? 'has-val input' : 'input'} type='password' value={password} onChange={p => setPassword(p.target.value)} />
                            <span className='focus-input' data-placeholder='Senha'></span>
                            <span className="lnr lnr-eye"></span>
                        </div>

                        <div className='wrap-input'>
                            <input className={autenthPassword !== "" ? 'has-val input' : 'input'} type='password' value={autenthPassword} onChange={p => setautenthPassword(p.target.value)} />
                            <span className='focus-input' data-placeholder='Confirmação de senha'></span>
                            <span className="lnr lnr-eye"></span>
                        </div>

                        <div className='container-login-form-btn'>
                            <button className='login-form-btn' onClick={salvar} >Save</button>
                        </div>
                        <div className='text-center'>
                            <span className='txt1'>Já possui conta?</span>
                            <Link className='txt2' to='/login'>Efetuar login</Link>
                        </div>
                    </div>
                </div>
            </form>
        </LayoutComponents >
    );
}




