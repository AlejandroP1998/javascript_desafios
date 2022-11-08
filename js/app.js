/* --------------------------- Datos del cliente --------------------------- */
function inicio() {
    let cliente = new Object();
    alert("Bienvenido a Lazy restaurant\nantes de comenzar con tu pedido debes llenar los datos de facturación.");
    cliente.nombre = prompt("Por favor ingresar un nombre y un apellido");
    let correcto = false;
    do {
        let pago = prompt("Ingrese el número de la forma de pago:\n1.Targeta de debito\n2.Targeta de credito\n3.Efectivo");
        correcto = false;
        switch (pago) {
            case "1":
                cliente.pago = "Targeta de debito";
                correcto = true;
                break;
            case "2":
                cliente.pago = "Targeta de credito";
                correcto = true;
                break;
            case "3":
                cliente.pago = "Efectivo";
                correcto = true;
                break;
            default:
                break;
        }
    } while (correcto == false);

    do {
        let consumo = prompt("Consumo:\n1.En el restaurante\n2.Para llevar\n3.Servicio a domicilio");
        correcto = false;
        switch (consumo) {
            case "1":
                cliente.consumo = "En el restaurante";
                correcto = true;
                break;
            case "2":
                cliente.consumo = "Para llevar";
                correcto = true;
                break;
            case "3":
                cliente.consumo = "Servicio a domicilio";
                correcto = true;
                break;
            default:
                break;
        }
    } while (correcto == false);

    return cliente;
}

/* Menu de entradas */
function entrada() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número de la entrada que desee añadir\n\t1.Sopa de papa ($300.00)\n\t2.Ensalada ($150.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Sopa de papa", precio: 300 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Ensalada", precio: 150 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de postres */
function postre() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número del postre que desee añadir\n\t1.Pie de manzana ($400.00)\n\t2.Rollos de canela ($250.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pie de manzana", precio: 400 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Rollos de canela", precio: 250 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de banquetes */
function banquete() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número del banquete que desee añadir\n\t1.Pollo entero asado ($1420.00)\n\t2.Hamburguesas jumbo combo familiar ($1250.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pollo entero asado", precio: 1420 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Hamburguesas jumbo combo familiar", precio: 1250 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de especialidades */
function especialidad() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número la especialidad que desee añadir\n\t1.Pizza super italiana ($700.00)\n\t2.Pasta al pesto ($575.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Pizza super italiana", precio: 700 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Pasta al pesto", precio: 575 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Menu de bebidas */
function bebida() {
    const comida = [];
    let fin = false;
    do {
        let op = prompt("Ingrese el número de la bebida que desee añadir\n\t1.Jarra de Gaseosa ($25.00)\n\t2.Jarra de té frio ($10.00)\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                comida.push({ nombre: "Jarra de gaseosa", precio: 25 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "2":
                comida.push({ nombre: "Jarra de té frio", precio: 10 });
                d = prompt("Desea ordenar algo mas?(y/n)");
                if (d == "n" || d == "N") {
                    fin = true;
                }
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false);
    return comida;
}

/* Eliminar un elemento del array */
function eliminar(comida) {
    let al = prompt("Ingrese el nombre del nombre del alimento que desea eliminar \n" + comida.map((el) => "\n" + el.nombre + "\n"));
    let nuevo = comida.filter((el) => el.nombre != al);
    if (nuevo.length == comida.length) {
        alert("Es posible que halla ingresado mal la comida a eliminar")
    }
    comida = nuevo;
    return comida;
}

/* Mostrar el pedido */
function mostrar(comida) {
    alert(comida.map((el) => el.nombre + "\t$" + el.precio + "\n"));
}

/* --------------------------- Menú de edicion del pedido --------------------------- */
function editar(productos) {
    let comida = productos;
    let fin = false;
    do {
        let op = prompt("Ingrese la opción que desea\n\t1.Eliminar\n\t2.Ver pedido\n\t3.Regresar al menu anterior\n\n");
        switch (op) {
            case "1":
                comida = eliminar(comida);
                alert("El pedido ahora es:\n" + comida.map((el) => el.nombre + "\n"))
                break;
            case "2":
                mostrar(comida);
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter no valido");
                break;
        }
    } while (fin == false)
    return comida;
}

/* Elementos especiales */
function informacion_especial(productos) {
    let es = productos;
    let fin = false;
    let arreglo = [];
    let resultado;
    do {
        let op = prompt("Ingrese el numero de la funcion a la que quiera ingresar\n\t1.Producto mas caro\n\t2.Producto mas barato\n\t3.Regresar al menu anterior");
        switch (op) {
            case "1":
                es.forEach((el) => {
                    arreglo.push(el.precio);
                });
                /* console.log(arreglo); */
                num = Math.max.apply(Math, arreglo);
                resultado = es.filter((el) => el.precio == num);
                /* console.log(Math.max.apply(Math, arreglo));
                console.log(es.filter((el)=>el.precio == parseInt(num))); */
                alert("La comida mas costosa es:\n\n\t" + resultado[0].nombre + " $" + resultado[0].precio);
                fin = true;
                arreglo = [];
                break;
            case "2":
                es.forEach((el) => {
                    arreglo.push(el.precio);
                });
                /* console.log(arreglo);
                console.log(Math.min.apply(Math, arreglo)); */
                num = Math.min.apply(Math, arreglo);
                resultado = es.filter((el) => el.precio == num);
                /* console.log(resultado); */
                alert("La comida mas barata es:\n\n\t" + resultado[0].nombre + " $" + resultado[0].precio);
                fin = true;
                arreglo = [];
                break;
            case "3":
                fin = true;
                break;
            default:
                alert("Ingreso un caracter invalido");
                break;
        }
    } while (fin == false)
}

/* --------------------------- Panel del menu --------------------------- */
function menu() {
    let fin = false;
    let productos = [];
    let food = [];
    do {
        let opcion = prompt("Nuestro menu\n\n\t1.Entradas\n\t2.Postres\n\t3.Banquetes\n\t4.Especialidades\n\t5.Bebidas\n\t6.Editar el pedido\n\t7.Datos especiales\n\t8.Terminar con el pedido\n\n");
        switch (opcion) {
            case "1":
                food = entrada();
                productos = productos.concat(food);
                /* console.log(productos); */
                break;
            case "2":
                food = postre();
                productos = productos.concat(food);
                /* console.log(productos); */
                break;
            case "3":
                food = banquete();
                productos = productos.concat(food);
                /* console.log(productos); */
                break;
            case "4":
                food = especialidad();
                productos = productos.concat(food);
                /* console.log(productos); */
                break;
            case "5":
                food = bebida();
                productos = productos.concat(food);
                /* console.log(productos); */
                break;
            case "6":
                productos = editar(productos);
                break;
            case "7":
                informacion_especial(productos);
                break;
            case "8":
                fin = true;
                break;
            default:
                break;
        }
    } while (fin == false)

    return productos;
}

/* --------------------------- Procesos de facturación --------------------------- */
class factura {
    constructor() {
        this.cliente = inicio();
    }

    pedido() {
        this.cliente.productos = menu();
        console.log("Resumen de compra");
        console.log(this.cliente.productos);
    }

    imprimirFactura() {
        const total = this.cliente.productos.reduce((ac, el) => ac + el.precio, 0);

        alert("DETALLES DE FACTURA\n\tNombre del cliente: " + this.cliente.nombre + "\n\tForma de pago: " + this.cliente.pago + "\n\tConsumo: " + this.cliente.consumo + "\n\nDETALLE DE COMPRA\n" + this.cliente.productos.map((el) => "\t" + el.nombre + "\t$" + el.precio + "\n") + "\n\nTOTAL\t$" + total);
    }



}

/* --------------------------- Inicio de la simulación --------------------------- */
let compra = new factura();
compra.pedido();
compra.imprimirFactura();