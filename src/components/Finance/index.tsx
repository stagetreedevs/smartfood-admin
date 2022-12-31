import './style.scss'
import { Chart } from 'primereact/chart';
import { useState } from 'react';

function Finance() {

    const [stackedData] = useState({
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro'],
        datasets: [{
            type: 'bar',
            label: 'Meses do ano',
            backgroundColor: '#f59e0b',
            scaleLineColor: "rgba(0,0,0,0)",
            data: [
                50,
                25,
                12,
                48,
                90,
                72,
                76,
                36,
                76,
                56,
                42
            ]
        }]
    });
    let stackedOptions = {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                stacked: false,
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#00000000'
                },
                border: {
                    display: false
                }

            },
            y: {
                stacked: false,
                ticks: {
                    color: '#00000000'
                },
                grid: {
                    color: '#00000000'

                },
                border: {
                    display: false
                }
            }
        }
    };
    return (
        <div className='finance'>
            <h1>Finanças</h1>
            <div className="body">
                <div className="cards">
                    <div className="card">
                        <p>dia mais lucrativo</p>
                        <div>
                            <h2>R$ 450,75</h2>
                            <h5>13 de abril</h5>
                        </div>
                    </div>
                    <div className="card">
                        <p>ganho total no mês</p>
                        <h2>R$ 3.345,87</h2>
                    </div>
                    <div className="card" id='more'>
                        <p>item mais vendido</p>
                        <h5>Spagetti Carbonara</h5>
                        <div>
                            <h2>R$ 1.000,00</h2>
                            <p>qts 10</p>
                        </div>
                    </div>
                </div>
                <div className="chart">
                    <Chart type="bar" data={stackedData} options={stackedOptions} />
                    <h2>2022</h2>
                </div>
            </div>
        </div>
    )
}

export default Finance