import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';


import './index.css';
/*
function Ola(props) {
    return (
        <p>Oiiii, {props.nome} </p>
    )
}


class oi extends React.Component {
    render() {
        return (
            <p>Tudo bem</p>
        );
    }
}*/

function Semana(props) {
    return (
        <div>
            <Dia dia={props.diaInical} />
            <Dia dia={props.diaInical + 1} />
            <Dia dia={props.diaInical + 2} />
            <Dia dia={props.diaInical + 3} />
            <Dia dia={props.diaInical + 4} />
            <Dia dia={props.diaInical + 5} />
            <Dia dia={props.diaInical + 6} />
        </div>
    )
}

function Dia(props) {
    return (
        <button>{

            (props.dia > 0 && props.dia < 32) ?
                props.dia :
                '.'

        }
        </button>
    )
}

function Calendario(props) {
    return (
        <div>
            <div>{props.mes} / {props.ano}</div>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button>
            <Semana diaInical={-3} />
            <Semana diaInical={4} />
            <Semana diaInical={11} />
            <Semana diaInical={18} />
            <Semana diaInical={25} />
            <Semana diaInical={32} />
        </div>
    )
}

function Agenda(props) {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendario mes={props.mes} ano={props.ano} />
            <br />
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

ReactDOM.render(
    <Agenda mes={7} ano={2021} />,
    document.getElementById('root'));