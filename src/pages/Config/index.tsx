import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider/useAuth';
import './style.scss'

function Config() {
    const auth = useAuth()
   

    return (
        <div>
            <button onClick={() => auth.logout()}>sair</button>
            Config
        </div>
    )
}

export default Config