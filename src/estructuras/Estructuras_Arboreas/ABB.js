var fs = require('fs')
class Nodo{
    constructor(dato){
        this.dato = dato
        this.izquierda = null
        this.derecha = null
    }
}
class ABB{
    constructor(){
        this.raiz = null
    }

    insertar(dato){
        this.raiz = this.add(dato, this.raiz)
        console.log("Inserto un nodo" )
    }

    add(dato, nodo){
        if(nodo == null){
            return new Nodo(dato)
        }else{
            if(dato > nodo.dato){
                nodo.derecha =  this.add(dato,nodo.derecha)
            }else{
                nodo.izquierda =  this.add(dato,nodo.izquierda)
            }
        }
        return nodo
    }

    buscar(dato, nodo){
        if(nodo!= null){
            if(dato == nodo.dato){
                console.log(nodo.dato + " fue encontrado")
                return 
            }
            this.buscar(dato, nodo.izquierda)
            this.buscar(dato, nodo.derecha)
        }
    }

    buscando(dato){
        if(this.raiz ==null){
            console.log("No existe arbol")
            return
        }
        if(dato == this.raiz.dato){
            console.log(this.raiz.dato)
            return
        }
        let nodo = this.raiz
        this.buscar(dato, nodo)
    }

    imprimir(nodo){
        if(nodo != null){
            console.log(nodo.dato)
            this.imprimir(nodo.izquierda)
            this.imprimir(nodo.derecha)
        }
    }

    imprimiendo(){
        if(this.raiz ==null){
            console.log("No existe arbol")
            return
        }
        this.imprimir(this.raiz)
    }

    eliminando(dato){
        //Caso1: no existe arbol
        if(this.raiz ==null){
            console.log("No existe arbol")
            return
        }
        //asignando valor inicial
        let nodo = this.raiz
        this.eliminar(dato, nodo)
    }

    eliminar(dato, nodo){
        //Caso2: el dato a buscar se encuentra en la raiz
        if(dato == this.raiz.dato){
            if(nodo.izquierda != null){
                let nodiz = nodo.izquierda
                let maxiz= null
                if(nodiz.derecha != null){
                    maxiz = this.maxIzq(nodo.izquierda)
                }else{
                    maxiz = nodo.izquierda
                    if(nodo.derecha != null){
                        let enlace = nodo.derecha
                        maxiz.derecha = enlace
                        nodo.derecha = null
                    }
                    nodo.izquierda = null
                    console.log("se elimino el nodo")
                    return
                }
                let nodmax = new nodo(maxiz)
                let trasiz = null
                let trasder = null
                if(nodo.izquierda!=null){
                    trasiz = nodo.izquierda
                }
                if(nodo.derecha != null){
                    trasder = nodo.derecha
                }
                if(trasiz != null){
                    nodmax.izquierda = trasiz
                    nodo.izquierda = null
                }
                if(trasder != null){
                    nodmax.derecha = trasder
                    nodo.derecha = null
                }
                console.log("se elimino el nodo")
                return
            }else if(nodo.izquierda == null && nodo.derecha != null){
                let nodiz = nodo.derecha
                let minder= null
                if(nodiz.izquierda != null){
                    minder = this.minDer(nodo.derecha) // minder con valor de dato
                }else{
                    minder = nodo.derecha // miner con valor de nodo
                    if(nodo.izquierda != null){
                        let enlace = nodo.izquierda
                        minder.izquierda = enlace
                        nodo.izquierda = null
                    }
                    this.raiz = nodo.derecha
                    nodo.derecha = null
                    console.log("se elimino el nodo")
                    return
                }
                let nodmin = new nodo(minder)
                let trasiz = null
                let trasder = null
                if(nodo.izquierda!=null){
                    trasiz = nodo.izquierda
                }
                if(nodo.derecha != null){
                    trasder = nodo.derecha
                }
                if(trasiz != null){
                    nodmin.izquierda = trasiz
                    nodo.izquierda = null
                }
                if(trasder != null){
                    nodmin.derecha = trasder
                    nodo.derecha = null
                }
                this.raiz = nodmin
                console.log("se elimino el nodo")
                return
            }else{
                this.raiz = null
                return
            }
        }
        //Demas Casos: eliminacion dentro del arbol
        if(nodo.izquierda!= null){
            //Dato encontrado a la izquierda
            if(dato == nodo.izquierda.dato){
                let tmp = nodo.izquierda
                //Caso3: Eliminacion de hijo a la izquierda
                if(tmp.izquierda == null && tmp.derecha == null){
                    nodo.izquierda = null
                    console.log("nodo hoja fue eliminado con exito")
                    return
                }else{ // Caso 4: Eliminacion de no hijo a la izquierda
                    if(tmp.izquierda != null){ // Reestructuracion de arbol y eliminacion de nodo
                        let nodiz = tmp.izquierda
                        let maxiz= null
                        if(nodiz.derecha != null){
                            maxiz = this.maxIzq(tmp.izquierda) // maxiz con valor de dato 
                        }else{
                            maxiz = tmp.izquierda // maxiz con valor de nodo
                            if(tmp.derecha != null){
                                let enlace = tmp.derecha
                                maxiz.derecha = enlace
                                tmp.derecha = null
                            }
                            tmp.izquierda = null
                            nodo.izquierda = maxiz
                            console.log("se elimino el nodo")
                            return
                        }
                        let nodmax = new nodo(maxiz)
                        let trasiz = null
                        let trasder = null
                        if(tmp.izquierda!=null){
                            trasiz = tmp.izquierda
                        }
                        if(tmp.derecha != null){
                            trasder = tmp.derecha
                        }
                        if(trasiz != null){
                            nodmax.izquierda = trasiz
                            tmp.izquierda = null
                        }
                        if(trasder != null){
                            nodmax.derecha = trasder
                            tmp.derecha = null
                        }
                        nodo.izquierda = nodmax
                        console.log("se elimino el nodo")
                        return
                    }else if(tmp.izquierda == null && tmp.derecha != null){ // Reestructuracion de arbol y eliminacion de nodo
                        let nodiz = tmp.derecha
                        let minder= null
                        if(nodiz.izquierda != null){
                            minder = this.minDer(tmp.derecha) // minder con valor de dato 
                        }else{
                            minder = tmp.derecha // minder con valor de nodo
                            if(tmp.izquierda != null){
                                let enlace = tmp.izquierda
                                minder.izquierda = enlace
                                tmp.izquierda = null
                            }
                            nodo.derecha = minder
                            tmp.derecha = null
                            console.log("se elimino el nodo")
                            return
                        }
                        let nodmin = new nodo(minder)
                        let trasiz = null
                        let trasder = null
                        if(tmp.izquierda!=null){
                            trasiz = tmp.izquierda
                        }
                        if(tmp.derecha != null){
                            trasder = tmp.derecha
                        }
                        if(trasiz != null){
                            nodmin.izquierda = trasiz
                            tmp.izquierda = null
                        }
                        if(trasder != null){
                            nodmin.derecha = trasder
                            tmp.derecha = null
                        }
                        nodo.derecha = nodmin
                        console.log("se elimino el nodo")
                        return
                    }
                }
            }
        }
        if(nodo.derecha != null){
 // Caso 5: Eliminacion de hijo a la derecha
            if(dato == nodo.derecha.dato){
                let tmp = nodo.derecha
                if(tmp.izquierda == null && tmp.derecha == null){
                    nodo.derecha = null
                    console.log("nodo hoja fue eliminado con exito")
                    return
                }else{ // Caso 6: Eliminacion de no hijo a la derecha
                    if(tmp.derecha != null){ // Reestructuracion de arbol y eliminacion de nodo
                        let nodiz = tmp.derecha
                        let minder= null
                        if(nodiz.izquierda != null){
                            minder = this.minDer(tmp.derecha) // minder con valor de dato 
                        }else{
                            minder = tmp.derecha // minder con valor de nodo
                            if(tmp.izquierda != null){
                                let enlace = tmp.izquierda
                                minder.izquierda = enlace
                                tmp.izquierda = null
                            }
                            nodo.derecha = minder
                            tmp.derecha = null
                            console.log("se elimino el nodo")
                            return
                        }
                        let nodmin = new nodo(minder)
                        let trasiz = null
                        let trasder = null
                        if(tmp.izquierda!=null){
                            trasiz = tmp.izquierda
                        }
                        if(tmp.derecha != null){
                            trasder = tmp.derecha
                        }
                        if(trasiz != null){
                            nodmin.izquierda = trasiz
                            tmp.izquierda = null
                        }
                        if(trasder != null){
                            nodmin.derecha = trasder
                            tmp.derecha = null
                        }
                        nodo.derecha = nodmin
                    }else if(tmp.derecha == null && tmp.izquierda != null){ // Reestructuracion de arbol y eliminacion de nodo
                        let nodiz = tmp.izquierda
                        let maxiz= null
                        if(nodiz.derecha != null){
                            maxiz = this.maxIzq(tmp.izquierda) // maxiz con valor de dato 
                        }else{
                            maxiz = tmp.izquierda // maxiz con valor de nodo
                            if(tmp.derecha != null){
                                let enlace = tmp.derecha
                                maxiz.derecha = enlace
                                tmp.derecha = null
                            }
                            tmp.izquierda = null
                            nodo.izquierda = maxiz
                            console.log("se elimino el nodo")
                            return
                        }
                        let nodmax = new nodo(maxiz)
                        let trasiz = null
                        let trasder = null
                        if(tmp.izquierda!=null){
                            trasiz = tmp.izquierda
                        }
                        if(tmp.derecha != null){
                            trasder = tmp.derecha
                        }
                        if(trasiz != null){
                            nodmax.izquierda = trasiz
                            tmp.izquierda = null
                        }
                        if(trasder != null){
                            nodmax.derecha = trasder
                            tmp.derecha = null
                        }
                        nodo.izquierda = nodmax
                    }
                }
            }
        }
        if(nodo.izquierda !=null){
            this.eliminar(dato, nodo.izquierda)
        }
       if(nodo.derecha != null){
            this.eliminar(dato, nodo.derecha)
       }
    }

    //Metodo de obtencion para maximo valor a la Izquierda
    maxIzq(nodo){
        if (nodo.derecha != null){
            let tmp = nodo.derecha
            if(tmp.derecha !=null){
                this.maxIzq(tmp)
            }else{
                var mandardato = tmp.dato
                nodo.derecha = null
                return mandardato
            }
        }
    }

    //Metodo de obtencion para minimo valor a la Derecha
    minDer(nodo){
        if (nodo.izquierda != null){
            let tmp = nodo.izquierda
            if(tmp.izquierda !=null){
                this.minDer(tmp)
            }else{
                var mandardato = tmp.dato
                nodo.izquierda = null
                return mandardato
            }
        }
    }

    actualizar(datoborr, datoin){
        if(this.raiz==null){
            console.log("no existe ningun arbol")
        }
        this.eliminando(datoborr)
        this.insertar(datoin)
        console.log("Actualizado")  
    }

    cargar(arreglo) {
        arreglo.map(e => {
            this.insertar(e)
        })
    }

    guardando(){
        if(this.raiz==null){
            console.log("no existe arbol")
            return
        }
        let temporal = this.raiz;
        this.guardar(temporal)
    }

    guardar(nodo) {
        let archivojs = [];
        archivojs.push(nodo.dato);
        if(nodo.izquierda!=null){
            this.guardar(nodo.izquierda)
        }
        if(nodo.derecha!=null){
            this.guardar(nodo.derecha)
        }
        let json = JSON.stringify(archivojs)
        let nombre = "ArbolBinarioBusqueda";
        fs.writeFile(nombre, json) 
    }

    graficarNodos(nodo,vector,datoBuscar){

        if(nodo.izquierda == null && nodo.derecha == null){
            let dato
            if(datoBuscar == nodo.dato){
                dato = {id: nodo.dato, label: nodo.dato.toString(), color: "lime"}
            }else{
                dato = {id: nodo.dato, label: nodo.dato.toString(),}
            }
            
            vector.push(dato)
        }else{
            let dato
            if(datoBuscar == nodo.dato){
                dato = {id: nodo.dato, label: nodo.dato.toString(), color: "lime"}
            }else{
                dato = {id: nodo.dato, label: nodo.dato.toString(),}
            }
            
            vector.push(dato)
        }
        
        if(nodo.izquierda != null){
            this.graficarNodos(nodo.izquierda,vector,datoBuscar)
        }

        if (nodo.derecha != null){
            this.graficarNodos(nodo.derecha,vector,datoBuscar)
        }

        return vector
    }

    obtenerNodos(datoBuscar){
        let vector = []

        return this.graficarNodos(this.raiz,vector,datoBuscar)
    }

    graficarApuntadores(nodo,vector){

        if(nodo.izquierda != null){
            this.graficarApuntadores(nodo.izquierda,vector)
            let edge = {from:nodo.dato, to:nodo.izquierda.dato}
            vector.push(edge)
        }

        if (nodo.derecha != null){
            this.graficarApuntadores(nodo.derecha,vector)
            let edge = {from:nodo.dato, to:nodo.derecha.dato}
            vector.push(edge)
        }

        return vector
    }

    obtenerAputadores(){
        let vector = []

        return this.graficarApuntadores(this.raiz,vector)
    }
}

export default ABB;

/* let abb = new ABB()
abb.imprimiendo()
abb.insertar(1)
abb.insertar(2)
abb.insertar(5)
abb.insertar(8)
abb.insertar(9)
abb.insertar(12)
abb.insertar(18)
abb.imprimiendo()
abb.buscando(5)
abb.eliminando(2)
abb.imprimiendo()
abb.eliminando(1)
abb.imprimiendo()
abb.eliminando(18)
abb.imprimiendo()
abb.actualizar(9, 10)
abb.imprimiendo() */

