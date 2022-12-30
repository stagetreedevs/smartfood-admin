import React from "react";
import './style.scss';

const Dash = () => {
    return (
        <div className="Dash">
            <div className="body1">
                <h1>Cantina della nonna</h1>
                <div className="avaliacao">
                    <img src="../smile.svg" alt="" />
                    <p>74%</p>
                </div>
                <h3>Ultimas avaliações</h3>
                <div className="cards">

                    <div className="card">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" className="user" />
                        <div className="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non curabitur tristique phasellus.
                            </p>
                            <img src="../smile.svg" alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" className="user" />
                        <div className="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non curabitur tristique phasellus.
                            </p>
                            <img src="../smile.svg" alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" className="user" />
                        <div className="content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim non curabitur tristique phasellus.
                            </p>
                            <img src="../smile.svg" alt="" />
                        </div>
                    </div>
                    <span>ver mais...</span>
                </div>

            </div>
            <div className="body2">
                <div className="financas">
                    <div className="card1">
                        <div className="card">
                            <h3>Finanças</h3>
                            <div className="content">
                                <div>
                                    <p>dia</p>
                                    <p id="amount">R$ 375,28</p>
                                </div>
                                <div>
                                    <p>vendas</p>
                                    <p id="qtd">16</p>
                                </div>
                            </div>
                            <div className="month">
                                <p>mês</p>
                                <p id="amount">R$ 4756,28</p>
                            </div>
                        </div>
                        <span>ver mais...</span>
                    </div>
                    <div className="card2">
                        <div className="notificacao">
                            <div id="elipce" />
                            <h3>Novo Pedido</h3>
                        </div>
                        <div className="hour">
                            <p>
                                19:35
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dash