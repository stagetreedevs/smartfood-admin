import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'

const Config = () => {
    const [form, setForm] = useState({
        name: '',
        location: '',
        hour: '',
        category: '',
        delivery: '',
    })

    return (
        <div className='settings'>
            <h1>Configurações</h1>
            <div className="body">
                <div className="body1">
                    <img src="../placeholder.png" alt="" />
                </div>
                <div className="body2">
                    <h2>Informações do estabelecimento</h2>
                    <div className="campos">
                        <TextField id="outlined-basic" label="Nome do Estabelecimento" variant="outlined" onChange={(e) => {
                            setForm({
                                ...form,
                                name: e.target.value
                            })
                        }} />
                        <TextField id="outlined-basic" label="Localizações" variant="outlined" onChange={(e) => {
                            setForm({
                                ...form,
                                location: e.target.value
                            })
                        }} />
                    </div>
                </div>
                <div className="body2">
                    <h2>Ajustes de negócio</h2>
                    <div className="campos">
                        <TextField id="outlined-basic" label="Horario de Funcionamento" variant="outlined" onChange={(e) => {
                            setForm({
                                ...form,
                                hour: e.target.value
                            })
                        }} />
                        <TextField id="outlined-basic" label="Categoria" variant="outlined" onChange={(e) => {
                            setForm({
                                ...form,
                                category: e.target.value
                            })
                        }} />
                        <TextField id="outlined-basic" label="Estimativa de entrega" variant="outlined" onChange={(e) => {
                            setForm({
                                ...form,
                                delivery: e.target.value
                            })
                        }} />
                    </div>
                </div>
                <div className="button" onClick={() => console.log(form)}><p>salvar</p></div>
            </div>
        </div>
    )
}

export default Config