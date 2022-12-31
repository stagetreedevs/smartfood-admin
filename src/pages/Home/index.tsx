import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'
import { InputSwitch } from 'primereact/inputswitch';

function Home() {
    const auth = useAuth()
    const navigate = useNavigate()
    const [checked1, setChecked1] = useState(false);

    return (
        <div className='home'>
            <div className="menu">
                <div className="group1">
                    <div className="divider">
                        <img src={"../SmartDelivery.svg"} alt="icone" />
                    </div>
                    <div className="button" onClick={() => navigate('dash')}>
                        <img src="../home.svg" alt="" width={25} />
                    </div>
                    <div className="button" onClick={() => navigate('requests')}>
                        <img src="../file.svg" alt="" width={25} />
                    </div>
                    <div className="button" onClick={() => navigate('box')}>
                        <img src="../box.svg" alt="" width={25} />
                    </div>
                    <div className="button" onClick={() => navigate('finance')}>
                        <img src="../dollar.svg" alt="" width={25} />
                    </div>
                </div>
                <div className="group2">
                    <div className='switch' >
                        <p>{(!checked1) ? 'aberto' : 'fechado'}</p>
                        <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} id='alt'/>
                    </div>
                    <img src="../settings.svg" alt="" width={20} onClick={() => navigate('settings')} />
                    <img src="../logOut.svg" alt="" width={20} onClick={() => {
                        auth.logout()
                    }} />
                </div>
            </div>
            <div className="homeBody">
                <Outlet />
            </div>
        </div>
    )
}

export default Home