import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class NavbarInter extends Component {
    state = { }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu className="ui tpo inverted attached menu">
            <Menu.Item>
                        <Link to="/gitPagueReac/">TytusDS</Link>
            </Menu.Item>
          <Menu.Item
            name='Cargar'
            active={activeItem === 'Cargar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Guardar'
            active={activeItem === 'Guardar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Agregar'
            active={activeItem === 'Agregar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Eliminar'
            active={activeItem === 'Eliminar'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Actualizar'
            active={activeItem === 'Actualizar'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Buscar...' />
            </Menu.Item>
            
          </Menu.Menu>
        </Menu>
      )
    }
}
