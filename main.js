function generarValores(izquierda, derecha){
    lista_valores = []
    for (let i = izquierda; i <= derecha; i++) {
        lista_valores.push(i)
    }
    return lista_valores
}


function generarCuadricula(elements){

    const display = document.getElementById('display')
    display.innerHTML = ''

    limit_der = (Math.sqrt(elements)) / 2
    limit_izq = (-(limit_der)) + 1

    for (let i = limit_izq; i < limit_der; i++) {

        for (let j = limit_izq; j < limit_der; j++) {

            grid_box = document.createElement('div')
            grid_box.setAttribute('class', 'grid-box')
            
            id = "("+ j + "," + -i +")"

            grid_box.setAttribute('id', id)         
            display.appendChild(grid_box);  
            
            if (i == 0 || j == 0){
                grid_box.style.backgroundColor = "#636363"
            }
        }
    }
}


function analisisFuncion(funcion, lista_valores_x, limites){

    let lista_pares = []


    for (let i = 0; i < lista_valores_x.length; i++) {
        let x = lista_valores_x[i];
        let y = eval(funcion)
        if (y <= limites[1] && y >= limites[0]) {
            lista_pares.push([x,y])
        }
    }

    return lista_pares
}


function decodeListId(lista_pares){
    lista_ids = []
    for (let i = 0; i < lista_pares.length; i++) {
        id = "(" + ((lista_pares[i])[0]).toString() + "," + ((lista_pares[i])[1]).toString() + ")"
        lista_ids.push(id)
    }
    return lista_ids
}


function colorBoxes(lista_ids){
    for (let i = 0; i < lista_ids.length; i++) {
        const box_id = lista_ids[i];
        const box = document.getElementById(box_id)
        box.style.backgroundColor = "#c5e312"
        
    }
}

const boton_enviar_funcion = document.getElementById("send-function")
const input_funcion = document.getElementById("input-function")

boton_enviar_funcion.addEventListener('click', function(){

    generarCuadricula(elements=3600)

    lista_pares = analisisFuncion(funcion=input_funcion.value, lista_valores_x=generarValores(izquierda=-30, derecha=30), limites=[-29,29])
    ids_boxes_pares = decodeListId(lista_pares=lista_pares)

    colorBoxes(lista_ids=ids_boxes_pares)
});