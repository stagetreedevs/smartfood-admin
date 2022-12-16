import React, { useEffect, useState } from 'react';
import './style.scss'
import { TextField } from '@mui/material';
import axios from 'axios';

function Login() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    
    function login(form: any) {
        console.log(form)
        axios.post("http://localhost:8000/auth/login/location", form)
            .then(res => {
                localStorage.setItem('Authorization', `Bearer ${res.data.token}`)
                window.location.href = '/home'
            })
            .catch(err =>{
                alert('Email ou senha não conferem, confirme se estão corretos')
                console.log(err)})
    }

    return (
        <div className='land'>
            <header className='header'>
                <a href="/">
                    <img src="logotipo.svg" alt="Logo" />
                </a>
                <div className='headContent'>
                    <a href='/'><p>Entregador</p></a>
                    <a href='/Login'><p>Meu negócio</p></a>
                </div>
            </header>
            <div className='bodyLogin'>
                <div className="content">
                    <h1>Entre no seu estabelecimento</h1>
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
                        <div className="buttons">
                            <div className="button" onClick={() => {
                                if(form.email === ""){
                                    alert('Digite um email')
                                } else if(form.password === ""){
                                    alert('Digite uma senha')
                                } else {
                                    login(form)
                                }
                            }}>
                                <p>começar</p>
                            </div>
                            <a href="/">Cadastre-se</a>
                        </div>
                    </div>
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

export default Login