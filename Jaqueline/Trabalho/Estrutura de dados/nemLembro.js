
var lista = new Array(13)

function addLista(elemento) {
    elemento = elemento.toUpperCase()
    let indice = (elemento.charCodeAt() % 65 + 1) % lista.length
    let aux = 0
    
    while (lista[indice]) {
        if (aux == lista.length) {
            return -1;
        }
        else {
            indice++;
            aux ++;
        }
        if (indice == lista.length) {
            posicao = 0;
        }
    }

    lista[indice] = elemento;

}

    function buscarNaLista(elemento) {
        elemento = elemento.toUpperCase()
        let indice = (elemento.charCodeAt() % 65 + 1) % 13

        for (indice in lista) {
            if (lista[indice] == elemento) {
                return indice
            }
        }
        for (let x = indice; x > 0; x--) {
            if (lista[x] == elemento) {
                return x
            }
        }

        return -1

    }

    addLista("n"), addLista('i'), addLista('v')

    addLista('o'), addLista('z'), addLista('u')

    addLista('a'), addLista('e'), addLista('f')

    addLista('r'), addLista('b'), addLista('L')

    console.log(lista)
    console.log(buscarNaLista('a'))
    console.log(lista.length)