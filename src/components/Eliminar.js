import React from 'react'
import { Button, Header, Icon, Modal,Menu,Input } from 'semantic-ui-react'

export default function Eliminar() {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Menu.Item>Eliminar</Menu.Item>}
            >
            <Header icon>
                <Icon name='trash' />
                Eliminar Dato
            </Header>
            <Modal.Content>
                    <Input type="text" fluid placeholder="agregar dato"/>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
            </Modal>
    )
}
