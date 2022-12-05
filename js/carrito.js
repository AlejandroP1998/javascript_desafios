const cliente = JSON.parse(localStorage.cliente);
let comida = JSON.parse(localStorage.carrito);


//query de los elementos del menu
const combos = document.querySelector(".combos");
const info = document.querySelector(".datos");
const total = document.querySelector(".costos")

const costos = () => {
    const totalC = comida.reduce((ac, el) => ac + el.precio * el.cantidad, 0);
    total.innerHTML = `
    <h2>Total de consumo: $${totalC}</h2>
    <h2>Propina (10%): $${totalC * 0.1}</h2>
    <h2>Total a pagar: $${totalC + totalC * 0.1}</h2>
    
    `
}

const infoCliente = () => {
    info.innerHTML = `
        <h2>Nombre: ${cliente.nombre}</h2>
        <h2>Apellido: ${cliente.apellido}</h2>
        <h2>Consumo: ${cliente.consumo}</h2>
    `
}

const obtenerInfo = (e) => {
    const skuMenu = e.target.getAttribute("sku");
    let nuevo = [];
    let encontrado = false;
    comida.forEach((com) => {
        if (com.sku == skuMenu && encontrado == false) {
            encontrado = true;
        } else {
            nuevo.push(com);
        }
    });
    comida = nuevo;
    localStorage.setItem("carrito", JSON.stringify(comida));
    combMenu(comida);
    Swal.fire({
        position: 'top-end',
        background: "red",
        color: "#fff",
        iconHtml: '<img class="icono" src="../assets/img/perezoso.ico">',
        title: 'Producto eliminado del carrito',
        showConfirmButton: false,
        toast: true,
        timer: 1000
    })
}

const sumar = (e) => {
    const skuMenu = e.target.getAttribute("sku");
    comida.forEach((com) => {
        if (com.sku === parseInt(skuMenu)) {
            com.cantidad++;
        }
    });
    localStorage.setItem("carrito", JSON.stringify(comida));
    combMenu(comida);
}

const restar = (e) => {
    const skuMenu = e.target.getAttribute("sku");
    comida.forEach((com) => {
        if (com.sku === parseInt(skuMenu) && com.cantidad != 0) {
            com.cantidad--;
            if (com.cantidad === 0) {
                let nuevo = [];
                let encontrado = false;
                comida.forEach((com) => {
                    if (com.sku == skuMenu && encontrado == false) {
                        encontrado = true;
                    } else {
                        nuevo.push(com);
                    }
                });
                comida = nuevo;
                localStorage.setItem("carrito", JSON.stringify(comida));
                combMenu(comida);
                Swal.fire({
                    position: 'top-end',
                    background: "red",
                    color: "#fff",
                    iconHtml: '<img class="icono" src="../assets/img/perezoso.ico">',
                    title: 'Producto eliminado del carrito',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1000
                })
            }
        }
    });
    localStorage.setItem("carrito", JSON.stringify(comida));
    combMenu(comida);
}

const combMenu = (comida) => {
    combos.innerHTML = "";
    comida.forEach((comb) => {
        const menu = document.createElement("div");
        menu.classList.add("menu");
        menu.innerHTML = `
        <img src="${comb.url}" alt="${comb.nombre}">
        <div>
            <h3>${comb.nombre}<br>$${comb.precio}</h3>
            <hr>
            <p>${comb.descripcion}</p>
            <hr>
            <div id="botonesSR">
                <p>Cantidad: ${comb.cantidad}</p>
                <img id="suma" src="../assets/img/suma.png" sku="${comb.sku}">
                <img id="resta" src="../assets/img/menos.png" sku="${comb.sku}">
            </div>
            
            <input type="button" value="Eliminar del carrito" id="btnC" sku="${comb.sku}">
        </div>
        `
        combos.append(menu);
    })
    const boton = document.querySelectorAll("#btnC");
    boton.forEach((button) => {
        button.onmouseover = () => {
            button.style.backgroundColor = "red";
        }

        button.onmouseout = () => {
            button.style.backgroundColor = "#144631";
        }
        button.addEventListener("click", obtenerInfo);
    });
    const botonSuma = document.querySelectorAll("#suma");
    const botonResta = document.querySelectorAll("#resta");
    botonSuma.forEach((button) => {
        button.addEventListener("click", sumar);
    });

    botonResta.forEach((button) => {
        button.addEventListener("click", restar);
    });

    costos();
}

function eliminarTodo() {
    comida = [];
    combMenu(comida);
    localStorage.setItem("carrito", JSON.stringify(comida));
    Swal.fire({
        position: 'top-end',
        background: "red",
        color: "#fff",
        iconHtml: '<img class="icono" src="../assets/img/perezoso.ico">',
        title: 'Se ha eliminado todo del carrito',
        showConfirmButton: false,
        toast: true,
        timer: 1000
    })
}

function orden() {
    if (Object.keys(comida).length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Carrito vacio',
            text: 'Primero elige un menu para poder ordenar'
        });
    } else {
        setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: 'Orden procesada',
                text: 'En un momento se te entregara la orden',
                showConfirmButton: false
            });
        }, 1000);

        setTimeout(() => {
            localStorage.clear();
            location.href = "../index.html";
        }, 3000);

    }
}

const vaciar = document.querySelector("#vaciar");
vaciar.addEventListener("click", eliminarTodo);

const ordenar = document.querySelector("#ordenar");
ordenar.addEventListener("click", orden);

infoCliente();
combMenu(comida);

