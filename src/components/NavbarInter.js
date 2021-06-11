import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Cargar from './Cargar'
import Agregar from './Agregar'
import Eliminar from './Eliminar'
import Actualizar from './Actualizar'
import {Link} from 'react-router-dom'
import Dibujar from './Dibujar';
import Buscar from './Buscar'

export default class NavbarInter extends Component {
    state = {
      estrutura : null,
      nombre: ''
     }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
     
    obtenerDatos = (estructura,nombre) =>{
      this.setState({
        estrutura: estructura,
        nombre: nombre
      })
    }

    imprimir=()=>{
      console.log(this.state.nombre)
    }

    render() {
      const { activeItem } = this.state
  
      if(this.state.estrutura == null){
        return (
          <div>
              <Menu className="ui tpo inverted attached menu">
                <Menu.Item>
                            <Link to="/gitPagueReac/">TytusDS</Link>
                </Menu.Item>
                <Cargar obtenerDatos={this.obtenerDatos} imprimir={this.imprimir} />
                <Agregar/>
                <Eliminar/>
                <Actualizar/>
                <Buscar/>
              <Menu.Menu position='right'>
                <Menu.Item name="Guardar" icon='save'>
                </Menu.Item>
                
              </Menu.Menu>
            </Menu>
          </div>
        )
      }else{
        return (
          <div>
              <Menu className="ui tpo inverted attached menu">
                <Menu.Item>
                            <Link to="/gitPagueReac/">TytusDS</Link>
                </Menu.Item>
                <Cargar obtenerDatos={this.obtenerDatos} imprimir={this.imprimir} />
                <Agregar/>
                <Eliminar/>
                <Actualizar/>
                <Buscar/>
              <Menu.Menu position='right'>
                <Menu.Item name="Guardar" icon='save'>
                </Menu.Item>
                
              </Menu.Menu>
            </Menu>
            <Dibujar nombre={this.state.nombre} estructura={this.state.estrutura}/>
          </div>
        )
      }
    }
}
