import React, { useEffect, useState } from 'react';
import './style.scss'
import { Radio, TextField } from '@mui/material';
import axios from 'axios';
import { Api } from '../../services/api';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { RadioButton } from 'primereact/radiobutton';

function Register() {
    const auth = useAuth()
    const navigate = useNavigate()
    const a: any = {}
    const [address, setAddress] = useState({
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        cep: ''
    })
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        establishment: '',
        image: '',
        address: address
    })
    const [visible, setVisible] = useState(1)

    const page1 = <div>
        <h1>Crie uma conta para
            o seu estabelecimento...</h1>
        <div className="form">
            <TextField id="outlined-basic" value={form.email} label="Email" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    email: e.target.value
                })
            }} />
            <TextField id="outlined-basic" value={form.password} label="Password" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    password: e.target.value
                })
            }} />
            <TextField id="outlined-basic" value={form.confirmPassword} label="Confirm Password" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    confirmPassword: e.target.value
                })
            }} />
            <div className="buttons">
                <div className="button" onClick={() => setVisible(2)}>
                    <p>Proxíma</p>
                </div>
            </div>
        </div>
    </div>

    const page2 = <div>
        <h1>Mais alguns detalhes
            sobre o seu negócio...</h1>
        <div className="form">
            <img className='back' src="arrow_back.svg" alt="back" onClick={() => setVisible(1)} />
            <TextField id="outlined-basic" value={form.name} label="Nome Do Estabelecimento" variant="outlined" onChange={(e) => {
                setForm({
                    ...form,
                    name: e.target.value
                })
            }} />
            <div>
                <label htmlFor="arquivo" className='label'>
                    <p>Adicione uma imagem para</p>
                    <p>representar seu estabelecimento</p>
                    <img src="plusIcon.svg" alt="+" />
                </label>
                <input type="file" accept='image/*' name="arquivo" id="arquivo" onChange={(e) => {
                    const file = e.target.files

                    const reader = new FileReader();

                    reader.onload = (file: any) => {
                        let base64 = file.target.result
                        setForm({
                            ...form,
                            image: base64
                        })
                    }
                    if (file) {
                        reader.readAsDataURL(file[0]);
                    }

                }} />
            </div>
            <p>Seu estabelecimento é?</p>
            <div className="radio">
                <div className="field-radiobutton">
                    <RadioButton inputId="establishment" name="establishment" value="Comercial" onChange={(e) => {
                        setForm({
                            ...form,
                            establishment: e.value
                        })
                    }} checked={form.establishment === 'Comercial'} />
                    <label htmlFor="establishment">Comercial</label>
                </div>
                <div className="field-radiobutton">
                    <RadioButton inputId="establishment2" name="establishment" value="Restaurante" onChange={(e) => {
                        setForm({
                            ...form,
                            establishment: e.value
                        })
                    }} checked={form.establishment === 'Restaurante'} />
                    <label htmlFor="establishment2">Restaurante</label>
                </div>
            </div>
            <div className="buttons">
                <div className="button" onClick={() => {
                    setVisible(3)
                }}>
                    <p>Proxíma</p>
                </div>
            </div>
        </div>
    </div >

    const page3 = <div>
        <h1>Agora precisamos do seu endereço...</h1>
        <div className="form">
            <img className='back' src="arrow_back.svg" alt="back" onClick={() => setVisible(2)} />
            <TextField id="outlined-basic" label="Cidade" variant="outlined" onChange={(e) => {
                setAddress({
                    ...address,
                    cidade: e.target.value

                })
                setForm({
                    ...form,
                    address: address
                })
            }} />
            <TextField id="outlined-basic" label="Rua" variant="outlined" onChange={(e) => {
                setAddress({
                    ...address,
                    rua: e.target.value
                })
                setForm({
                    ...form,
                    address: address
                })
            }} />
            <TextField id="outlined-basic" label="Bairro" variant="outlined" onChange={(e) => {
                setAddress({
                    ...address,
                    bairro: e.target.value
                })
                setForm({
                    ...form,
                    address: address
                })
            }} />
            <div className="grid">
                <TextField id="outlined-basic" label="Numero" variant="outlined" onChange={(e) => {
                    setAddress({
                        ...address,
                        numero: e.target.value
                    })
                    setForm({
                        ...form,
                        address: address
                    })
                }} />
                <TextField id="outlined-basic" label="Cep" variant="outlined" onChange={(e) => {
                    setAddress({
                        ...address,
                        cep: e.target.value
                    })

                    setForm({
                        ...form,
                        address: address
                    })
                }} />
            </div>
            <div className="buttons">
                <div className="button" onClick={() => {
                    login(form)
                }}>
                    <p>Registrar</p>
                </div>
            </div>
        </div>
    </div>

    const page4 = <div className='complete'>
        <h1>Parabéns, seu estabelecimento
            foi cadastrado com sucesso!!!</h1>
        <div className="buttons">
            <div className="button" onClick={() => {
                navigate('/login')
            }}>
                <p>Acesse agora sua Home!</p>

            </div>
        </div>
    </div>

    async function login(form: any) {

        try {
            await Api.post("/auth/register/location", form).then(app => console.log(app))
            setVisible(4)

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
                    <a href='/'><p>Entregador</p></a>
                    <a href='/Login'><p id='select'>Meu negócio</p></a>
                </div>
            </header>
            <div className='bodyLogin'>
                <div className="content">
                    {visible === 1 && page1}
                    {visible === 2 && page2}
                    {visible === 3 && page3}
                    {visible === 4 && page4}
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

export default Register