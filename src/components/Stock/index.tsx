import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'
import { InputSwitch } from 'primereact/inputswitch';
import axios from 'axios';
import { Pagination } from '@mui/material';

function Stock() {
    const [list, setList] = useState<any>([])
    const [itensPage, setItensPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(list.length / itensPage)
    const startIndex = currentPage * itensPage
    const endIndex = startIndex + itensPage

    const currentItens = list.slice(startIndex, endIndex)


    useEffect(() => {
        const req = async () => {
            const data = await axios('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.data)

            setList(data)
            console.log(data);

        }

        req()
        if(window.outerWidth <= 560){
            setItensPage(3)
        }
    }, [])
    return (
        <div className='stock'>
            <div className="head">
                <h1>Estoque</h1>
                <h3>Adicionar item<img src="../plus.svg" alt="" /></h3>
            </div>
            <div className="body">
                <div className="itens">

                    {
                        currentItens.map((item: any, key: any) => (
                            <div className="item" key={key}>
                                <img src="https://source.unsplash.com/random/150x200/?food" alt="" />
                                <p>
                                    {item.id}
                                </p>
                            </div>
                        )
                        )
                    }
                </div>
                <Pagination count={pages} showFirstButton showLastButton onChange={(e, value) => {
                    setCurrentPage(value - 1);

                }} className='paginator'/>
            </div>
        </div>
    )
}

export default Stock