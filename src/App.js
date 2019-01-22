import React, { Component } from 'react';
import './App.css';
import PlacarContainer from './components/PlacarContainer'

const dados = {
  partida: {
      estadio: "Mineirão/MG",
      data: "01/06/2016",
      horario: "19hs",
  },
  casa: {
      nome: "Cruzeiro",
  },
  visitante:{
      nome: "Flamengo",
  }
};

export default class App extends React.Component {

    componentDidMount() {
        this.dados()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
    
      dados = async () => {
        const response = await fetch('http://127.0.0.1:8080/dados');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(JSON.stringify(body));
        return body;
      };

      

  render(){
      return <PlacarContainer {...dados} tempo={90} />           
  }
}
