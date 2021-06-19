import React from 'react'
import { Button, Header, Icon, Modal,Menu,Input } from 'semantic-ui-react'
import Cola from '../estructuras/Estruturas_Lineales/Cola'
import ColaPrioridad from '../estructuras/Estruturas_Lineales/ColaPrioridad'
import ABB from '../estructuras/Estructuras_Arboreas/ABB'

let propsG
function onChange(e){
    let files = e.target.files[0];
    let reader = new FileReader();
    console.log(e.target.files[0])
    reader.onload = (e) => {
        const text = reader.result.toString().trim();
        console.log(text)
        let data = JSON.parse(text); //parseo de archivo JSON
        structW(propsG.nombre, data.valores, propsG.edd) 
    }
    reader.readAsText(files);
}
function structW(nombre,datos,edd){ // FUNCION PARA SABER QUE TIPO DE ESTRUCTURA ES.
    switch(nombre){
        case "Pila" :
            if(edd == null){
                edd = new Cola();
            }
            edd.cargar(datos)
            break
        case "Cola":
            if(edd == null){
                edd = new Cola();
            }
            edd.cargar(datos)
            break
        case "Cola de prioridad":
            if(edd == null){
                edd = new ColaPrioridad();
            }
            edd.cargar(datos)
            break
        case "Lista simplemente enlazada":

            /* edd = new Cola();
            edd.cargar(datos) */
            break

        case "Lista doblemente enlazada":

             edd = new Cola();
            edd.cargar(datos) 
            break

        case "Lista circular simplemente enlazada":

            /* edd = new Cola();
            edd.cargar(datos) */
            break

        case "Lista circular doblemente enlazada":

            edd = new Cola();
            edd.cargar(datos) 
            break
        case "Ordenamiento Selección":

            edd = arrString(datos)
            break
        case "Ordenamiento Inserción":

            edd = arrString(datos)
            break
        case "Ordenamiento Burbuja":

            edd = arrString(datos)
            break
        case "Ordenamiento Rapido":

            edd = arrString(datos)
            break
        case "Arbol ABB":

            edd = new ABB();
            edd.cargar(datos)
            console.log(edd.obtenerNodos())
            console.log(edd.obtenerAputadores())
            break
        default:
            break;
    }
    propsG.obtenerDatos(edd);
}



function arrString(arreglo){
    let newarr = []
  
    
    if(arreglo[0].charCodeAt){
        for (let i = 0; i < arreglo.length-1; i++) {
          newarr.push(getCharCodes(arreglo[i]))
          
        }
    }else{
      console.log("soy un numero")
      return arreglo
    }
  
    return newarr
  }
  
  function getCharCodes(s){
    let charCodeArr = 0;
    
    for(let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i);
        charCodeArr += code
    }
    
    return charCodeArr;
  }


export default function Cargar(props) {
    propsG = props
    const [open, setOpen] = React.useState(false)
    return (
        <Modal
            className="modalcargar"
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
                <Input className="inputcargar" fluid type="file" accept=".json" onChange={(e) =>  onChange(e)} />
            <Modal.Actions>
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button className="buttoncargar" color='green' inverted onClick={() =>  setOpen(false)}>
                <Icon name='checkmark' /> Si
                </Button>
            </Modal.Actions>
            </Modal>
    )
}
