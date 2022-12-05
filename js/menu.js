const cliente = JSON.parse(localStorage.cliente);
const comida = JSON.parse(localStorage.carrito);

let combo = [];

let bienvenida = document.querySelector("#bienvenida");
bienvenida.textContent = "Bienvenid@ " + cliente.nombre;

//query de los elementos del menu
const combos = document.querySelector(".combos");

const obtenerInfo = (e) => {
    const skuMenu = e.target.getAttribute("sku");
    const menuElegido = combo.find((comida) => comida.sku == skuMenu);

    if (Object.keys(comida).length === 0) {
        comida.push(menuElegido);
    } else {
        let repetido = false;
        comida.forEach((al) => {
            if (menuElegido.sku === al.sku) {
                al.cantidad++;
                repetido = true;
            }
        })
        if (repetido === false) {
            comida.push(menuElegido);
        }
    }

    localStorage.setItem("carrito", JSON.stringify(comida));
    Swal.fire({
        position: 'top-end',
        background: "#144631",
        color: "#fff",
        iconHtml: '<img class="icono" src="../assets/img/perezoso.ico">',
        title: 'Producto añadido al carrito',
        showConfirmButton: false,
        toast: true,
        timer: 1000
    })
}

const combMenu = (combi) => {
    combos.innerHTML = "";
    combi.forEach((comb) => {
        const menu = document.createElement("div");
        menu.classList.add("menu");
        menu.innerHTML = `
        <img src="${comb.url}" alt="${comb.nombre}">
        <div>
            <h3>${comb.nombre}<br>$${comb.precio}</h3>
            <hr>
            <p>${comb.descripcion}</p>
            <input type="button" value="Añadir al carrito" id="btnC" sku="${comb.sku}">
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
}

const filtro = document.querySelector("#filtro");
filtro.onchange = () => {
    let nuevoA = []
    combo.forEach((el) => {
        if (el.tipo === filtro.value) {
            nuevoA.push(el);
        } else if (filtro.value === "Sin filtro") {
            nuevoA = combo;
        }
    });
    combMenu(nuevoA);
}

const cargarMenu = async () => {
    const response = await fetch('../json/data.json');
    const data = await response.json();
    combo = data;
    combMenu(combo);
}

cargarMenu();