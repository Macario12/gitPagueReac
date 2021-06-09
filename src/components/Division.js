import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Division extends Component {
    render() {
        return (
                 <Card color = {this.props.color}>
                    <Image src={this.props.imagen} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Description>
                        {this.props.descripcion}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon className='angle double right icon' />
                        IR
                    </a>
                    </Card.Content>
                </Card>
        )
    }
}
