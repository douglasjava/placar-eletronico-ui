import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlacarContainer from './components/PlacarContainer'

const url = 'http://127.0.0.1:8080/dados';

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

var request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function () {   
  console.log(request); 
}

export default class App extends React.Component {
  render(){
      return <PlacarContainer {...dados} tempo={90} />           
  }
}
