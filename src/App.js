import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import PlacarContainer from './components/PlacarContainer'

export default class App extends React.Component {

constructor(props){
    super(props);
    this.state = {
        dados: [],
        isloader: false,
    };
}

componentDidMount() {

    axios
      .get('http://127.0.0.1:8080/dados')
      .then(response => {
         let dados = response.data;
         this.setState({
             isloader: true,
             dados: dados
        });
         //console.log("state", JSON.stringify(this.state.dados[1].partida));
      }).catch(error => console.log(error));
  }


  render(){

      var {isloader, dados} = this.state;

      if(!isloader){
          return <div>Loading...</div>
      } else {
        return <PlacarContainer casa = {dados[1].casa} 
                                visitante = {dados[1].visitante} 
                                partida = {dados[1].partida}  
                                lista = {dados}                 
                                tempo={90} />    
      }
  }
}
 