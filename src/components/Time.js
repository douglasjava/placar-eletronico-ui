import React from 'react';

import BotaoGol from './BotaoGol';

export default class Time extends React.Component {
    render() {
        return (
            <div>
               <h1>{this.props.nome}</h1>
               <h1>{this.props.gols}</h1>
               <BotaoGol marcarGol={this.props.marcarGol} />
            </div>
        );
    }
}