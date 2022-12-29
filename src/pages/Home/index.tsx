import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'
import { InputSwitch } from 'primereact/inputswitch';

function Home() {
    const auth = useAuth()
    const [checked1, setChecked1] = useState(false);

    return (
        <div className='home'>
            <div className="menu">
                <div className="group1">
                    <div className="divider">
                        <img src={"../SmartDelivery.svg"} alt="icone" />
                    </div>
                    <img src="../home.svg" alt="" width={25} />
                    <img src="../file.svg" alt="" width={25} />
                    <img src="../box.svg" alt="" width={25} />
                    <img src="../dollar.svg" alt="" width={25} />
                </div>
                <div className="group2">
                    <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} className='switch'/>
                    <img src="../settings.svg" alt="" width={20} />
                    <img src="../logOut.svg" alt="" width={20} onClick={() => {
                        auth.logout()
                    }}/>
                </div>
            </div>
            <div className="homeBody">
                <Outlet />
            </div>
        </div>
    )
}

export default Home