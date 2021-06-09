import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Division from './Division'
import './Divisiones.css'


export default class Divisiones extends Component {
    render() {
        return (
            <div className="divisiones"> 
            <div className="one">
                <h1>TytusDS</h1>
            </div>
            
            <br/>
            <br/>
            <Card.Group itemsPerRow={4} >
                    <Division title="Ordenamiento Burbuja" descripcion="this a description" color='red' imagen="https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif"/>
                    <Division title="Ordenamiento Seleccion" descripcion="this a description" color='green' imagen="https://upload.wikimedia.org/wikipedia/commons/a/a5/Smoothsort.gif"/>
                    <Division title="Ordenamiento Insersion" descripcion="this a description" color='yellow' imagen="https://thumbs.gfycat.com/DazzlingGracefulAngelfish-size_restricted.gif"/>
                    <Division title="Ordenamiento Rapido" descripcion="this a description" color='blue' imagen="https://media.geeksforgeeks.org/wp-content/uploads/20190705180519/quicksort.gif"/>
                   
                    <Division title="Lista Simple" descripcion="this a description" color='green' imagen="https://s6.gifyu.com/images/A-1.gif"/>
                    <Division title="Lista doble" descripcion="this a description" color='yellow' imagen="https://s6.gifyu.com/images/A-2.gif"/>
                    <Division title="lista circular simple" descripcion="this a description" color='blue' imagen="https://s6.gifyu.com/images/A-4.gif"/>
                    <Division title="lista circular doble" descripcion="this a description" color='violet' imagen="https://s6.gifyu.com/images/A-3.gif"/>

                    <Division title="arbol 1" descripcion="this a description"/>
                    <Division title="arbol 2" descripcion="this a description"/>
                    <Division title="arbol 3" descripcion="this a description"/>
                    <Division title="arbol 4" descripcion="this a description"/>
                    <Division title="arobl 5" descripcion="this a description"/>
            </Card.Group>
            </div>
        )
    }
}
