var fs = require('fs')
class Nodo {
    constructor(dato){
        this.dato = dato
        this.siguiente = null
    }
}

class Cola {
    constructor(){
        this.primero = null
        this.ultimo = null
        this.longitud = 0 
    }

    estaVacia() {
        if (this.primero == null){
            return true
        }

        return false
    }

    Push(dato){
        let nuevoNodo = new Nodo(dato)

        if(this.estaVacia()){
            this.primero = nuevoNodo
            this.ultimo = nuevoNodo
        }else{
            nuevoNodo.siguiente = this.primero
            this.primero = nuevoNodo
        }

        this.longitud++
    }

    Pop(){
        let eliminado = this.ultimo
        if (this.primero == this.ultimo){
            this.primero = null
            this.ultimo = null
        }else{
            let nodoActual = this.primero
            while (nodoActual.siguiente != eliminado){
                nodoActual = nodoActual.siguiente
            }

            this.ultimo = nodoActual
            this.ultimo.siguiente = null
        }
        this.longitud--
    }

    Imprimir(){
        let text = ""
        let nodoActual = this.primero

        while (nodoActual != null){
            text += nodoActual.dato + "->"
            if(nodoActual.siguiente != null){
                nodoActual = nodoActual.siguiente
            }else{
                nodoActual = null
            }
            
        }
        text += "null"

        return text
    }

    actualizar(datoAnterior, datoNuevo){
        let nodoActual = this.primero

        while(nodoActual != null){
            if(nodoActual.dato == datoAnterior){
                nodoActual.dato = datoNuevo
            }

            nodoActual = nodoActual.siguiente
        }
    }

    buscar (dato){
        let datoEncontrado = null
        let nodoActual = this.primero

        while(nodoActual != null){
            if(nodoActual.dato == dato){
                datoEncontrado = "El dato se encontró: "+ nodoActual.dato
                return datoEncontrado
            }

            nodoActual = nodoActual.siguiente
        }
        datoEncontrado = "no se encontro el dato"
        return  datoEncontrado
    }

    eliminar(dato){
       let nodoActual = this.primero
        let nodoanterior = null

        if(nodoActual != null && nodoActual.dato == dato){
            this.primero = nodoActual.siguiente
            return
        }

        while(nodoActual != null && nodoActual.dato != dato){
            nodoanterior = nodoActual
            nodoActual = nodoActual.siguiente
        }

        if (nodoActual == null){
            return
        }

        nodoanterior.siguiente = nodoActual.siguiente;
    }
    
    cargar(arr){
        arr.map(e => {
            this.Push(e)
        })
    }

    guardar(arr){
        var archivoJSON = JSON.stringify(arr)

        fs.writeFile("Cola.json", archivoJSON)
    }
}

export default Cola;