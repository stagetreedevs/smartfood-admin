import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss'

function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className='land'>
            <header className='header'>
                <a href="/">
                    <img src="logotipo.svg" alt="Logo" />
                </a>
                <div className='headContent'>
                    <a href='/delivery'><p>Entregador</p></a>
                    <a href='/Login'><p>Meu negócio</p></a>
                </div>
            </header>
            <div className='body'>
                <div className="content">
                    <p>Baixe o APP do Entregador
                        para concluir seu cadastro e
                        começar no SmartDelivery</p>
                    <div className="buttons">
                        <img src="GooglePlay.svg" alt="" />
                        <img src="AppStore.svg" alt="" />
                    </div>
                </div>
                <img id='landImage' src="entregador.svg" alt="LandingIllustration" />
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

export default LandingPage