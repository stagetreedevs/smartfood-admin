import React from 'react';
import './style.scss'

function LandingPage() {
    return (
        <div className='land'>
            <header className='header'>
                <img src="logo.svg" alt="Logo" />
                <div className='headContent'>
                    <p>Entregador</p>
                    <p>Meu negócio</p>
                </div>
            </header>
            <div className='body'>
                <div className="content">
                    <p>Suas vendas decolando de forma
                        inteligente</p>
                    <span>Seus clientes a um clique do seu
                        negocio</span>
                <div className="divider"/>
                <div className="button">Começar</div>
                </div>
                <img src="LandingIllustration.svg" alt="LandingIllustration" />
            </div>
            <hr />
            <div className="footer">
            <img src="logo.svg" alt="Logo" className='logoFooter' />
                <div className='footerContent'>
                    <p>Social</p>
                    <div className='icons'>
                    <img src="facebook.svg" alt="facebook" /><img src="instagram.svg" alt="instagram" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage