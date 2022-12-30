import React, { useEffect, useState } from 'react';
import './style.scss'

const Requests = () => {
    const [list, setList] = useState([
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        },
        {
            name: 'pedido',
        }
    ])

    return (
        <div className="requests">
            <h1>Pedidos</h1>
            <div className="body">
                {
                    list.map(req => (
                        <div className="request">
                            <div className='group'>
                                <p>{req.name}</p>
                            </div>
                            <div className='buttons'>
                                <div className="button1">
                                    <p>PREPARAR</p>
                                </div>
                                <div className="button2">
                                    <p>ENVIAR</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Requests