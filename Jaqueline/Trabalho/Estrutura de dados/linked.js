function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;

    this.append = function (element) {
        let node = new Node(element), current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.size = function () {
        return length;
    };

    this.valores = function () {
        let current = head;
        string = ""
        while (current) {
            string += current.element + (current.next ? '->' : '');
            current = current.next;
        }
        return string;


    }

    this.remove = function () {
        let current = head;
        let aux = current.element;
        head = current.next
        length--
        return aux;
    }


    this.inserirNoInicio = function (element) {
        let node = new Node(element);
        console.log(lista.valores());
        if (head === null) {
            head = node;
        } else {

            node.next = head
            head = node


        }
        length++;
    };

    this.retornarPosicao = function (element) {
        let pos = 0;
        let current = head;

        if (current.element == element) {
            return pos;
        } else {
            while (current.next) {
                pos++
                current = current.next
                if (current.element == element){
                    return pos
                }
            }
            pos = -1
            return pos
        }


    }

    this.removerElementoDeUmaPosicao = function (pos){
        let current = head;
        let i = 1;
        let retorno;
        let aux1;
    if (pos > length) {
        return -1
    }
        if (pos == 0 ){
            retorno = current.element
            head = current.next
            length--
            return retorno
        }  else {
            while (current.next){
                aux1 = current
                current = current.next
                if (pos == i ){
                    retorno = current.element
                    aux1.next = current.next3
                    length--
                    return retorno
                }
                i++
            }
            return -1
        }
    }


}

lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.append(4);
lista.inserirNoInicio(20)

console.log(lista.size());
console.log(lista.valores());
console.log(lista.remove())
console.log(lista.valores());
console.log(lista.retornarPosicao(4))
console.log(lista.removerElementoDeUmaPosicao(1))
console.log(lista.valores());
