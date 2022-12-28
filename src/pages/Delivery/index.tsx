import React, { useEffect, useState } from 'react';
import './style.scss'
import { TextField } from '@mui/material';
import axios from 'axios';
import { Api } from '../../services/api';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

function Delivery() {
    const auth = useAuth()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const log = <div>
        <h1>Crie sua conta de
            entregador</h1>
        <div className="form">
            <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    email: e.target.value
                })
            }} />
            <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    password: e.target.value
                })
            }} />
            <TextField id="outlined-basic" label="Comfirm Password" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    confirmPassword: e.target.value
                })
            }} />
            <div className="buttons">
                <div className="button" onClick={() => {
                    if (form.email === "") {
                        alert('Digite um email')
                    } else if (form.password === "") {
                        alert('Digite uma senha')
                    } else if (form.confirmPassword === "") {
                        alert('Confirme sua senha')
                    } else if (form.password !== form.confirmPassword) {
                        alert('As senhas não conferem')
                    } else {
                        login(form)
                    }
                }}>
                    <p>Registrar</p>
                </div>
            </div>
        </div>
    </div>

    async function login(form: any) {

        try {
            await Api.post("/auth/register/delivery",form).then( res => console.log(res))

            navigate('/Private')

        } catch (error) {
            alert("Algo deu errado... verifique os dados e tente novamente.")
        }
    }

    return (
        <div className='land'>
            <header className='header'>
                <a href="/">
                    <img src="logotipo.svg" alt="Logo" />
                </a>
                <div className='headContent'>
                    <a href='/RegistroEntregador'><p id='select'>Entregador</p></a>
                    <a href='/Login'><p>Meu negócio</p></a>
                </div>
            </header>
            <div className='bodyLogin'>
                <div className="content">
                    {log}
                </div>
                <img id='LoginImage' src="City.svg" alt="LoginIllustration" />
            </div>
            <hr />
            <div className="footer">
                <a href="/">
                    <img src="logotipo.svg" alt="Logo" className='logoFooter' />
                </a>
                <div className='footerContent'>
                    <p>Social</p>
                    <div className='icons'>
                        <img src="facebook.svg" id='face' alt="facebook" /><img src="instagram.svg" id='insta' alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery