import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'

function Home() {
    const auth = useAuth()
   

    return (
        <div>
            <button onClick={() => auth.logout()}>sair</button>
            home
        </div>
    )
}

export default Home