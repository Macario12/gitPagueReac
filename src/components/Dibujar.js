import React, { Component } from 'react'
import GraficaListas from './GraficaListas'
import GraficaListaCircular from './GraficaListaCircular'

export default class Dibujar extends Component {
  render() {
     if(this.props.nombre == "Lista circular simplemente Enlazada" || this.props.nombre == "Lista circular doblemente Enlazada"){
      return (
        <div>
            <GraficaListaCircular nombre={this.props.nombre} edd={this.props.estructura}/>
        </div>
      )
    }else{
      return (
        <div>
             <GraficaListas nombre={this.props.nombre} edd={this.props.estructura}/> 
        </div>
      )
    }

    /* return(
      <div>
      <br/>
      <h1>{this.props.nombre}</h1>
      <h3>{this.props.estructura.Imprimir()}</h3>
      <GraficaListas nombre={this.props.nombre} edd={this.props.estructura}/> 
      </div>
    ) */
  }
}
