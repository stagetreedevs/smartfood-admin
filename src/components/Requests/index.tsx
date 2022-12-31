import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.scss'

const Requests = () => {
    const [list, setList] = useState<any>([])
    useEffect(() => {
        const req = async () => {
            const data = await axios('https://jsonplaceholder.typicode.com/users')
                .then(response => response.data)

                setList(data)
        }

        req()

    }, [])


    return (
        <div className="requests">
            <h1>Pedidos</h1>
            <div className="body">
                {
                    list.map((item:any) => (
                        <div className="request">
                            <div className='group'>
                                <p>{item.name}</p>
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