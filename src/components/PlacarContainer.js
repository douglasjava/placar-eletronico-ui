import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            gols_casa: 0,
            gols_visitante: 0,
            data: {date: new Date()},
        };
    }
    
    marcarGolCasa(){
        this.setState({
            gols_casa: this.state.gols_casa + 1,
        });
    }

    marcarGolVisitante(){
        this.setState({
            gols_visitante: this.state.gols_visitante + 1,
        });
    }

    render() {
        const { partida, casa, visitante } = this.props;
        const { lista } = this.props;
        const estilo = {float: "left", "marginRight": "20px"};
        const estilo_1 = {float: "left", "marginRight": "40px"}
        return (
            <div>
                <div style={estilo}>
                <h3>Casa</h3>
                    <Time nome={casa.nome} 
                          gols={this.state.gols_casa}
                          marcarGol={this.marcarGolCasa.bind(this)}/>
                </div>

                <div style={estilo}>
                    <Partida {...partida}/>
                </div>

                <div style={estilo}>
                    <h3>Visitante</h3>
                    <Time nome={visitante.nome} 
                          gols={this.state.gols_visitante}
                          marcarGol={this.marcarGolVisitante.bind(this)}/>
                </div>
                <div style={{clear: "both"}}></div>

				<div>
                <h3>Jogos</h3>
                    {lista.map(i => (
                        <ol key={i.id}> 
                            <label>{this.state.date.datatoLocaleTimeString()}</label>
                            <p><b>Partida: {i.casa.nome} X {i.visitante.nome}</b> - 
                            <i>{i.partida.estadio}/{i.partida.data}/{i.partida.horario}</i> </p>
                        </ol>
                    ))}
                </div>                
            </div>
        );
    }
}