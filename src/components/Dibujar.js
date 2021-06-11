import React, { Component } from 'react'

export default class Dibujar extends Component {
  render() {
    return (
      <div>
           <br/>
           <h1>{this.props.nombre}</h1>
           <h3>{this.props.estructura.Imprimir()}</h3>
      </div>
    )
  }
}
