import React from 'react'
import { Button, Header, Icon, Modal,Menu,Input } from 'semantic-ui-react'
import Cola from '../estructuras/Estruturas_Lineales/Cola'

let edd,propsG
function onChange(e){
    let files = e.target.files[0];
    let reader = new FileReader();
    console.log(e.target.files[0])
    reader.onload = (e) => {
        const text = reader.result.toString().trim();
        console.log(text)
        let data = JSON.parse(text); //parseo de archivo JSON
        structW(data.nombre, data.valores) 
        console.log(data)
    }
    reader.readAsText(files);
}
function structW(nombre,datos){ // FUNCION PARA SABER QUE TIPO DE ESTRUCTURA ES.
    switch(nombre){
        case "Pila" :
            edd = new Cola();
            datos.map(e => edd.Push(e))
            break
        case "Cola":

            edd = new Cola();
            datos.map(e => edd.Push(e))
            console.log(edd.Imprimir())
            break
    }
    propsG.obtenerDatos(edd,nombre);
}

export default function Cargar(props) {
    propsG = props
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<Menu.Item>Cargar</Menu.Item> }
            >
            <Header icon>
                <Icon name='folder open outline' />
                Cargar
            </Header>
            <Modal.Content>
            </Modal.Content>
                <Input fluid type="file" accept=".json" onChange={(e) =>  onChange(e)} />
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={props.imprimir(),() =>  setOpen(false)}>
                <Icon name='checkmark' /> Si
                </Button>
            </Modal.Actions>
            </Modal>
    )
}
