const cliente = JSON.parse(localStorage.cliente);
const comida = JSON.parse(localStorage.carrito);
console.log(comida);

let bienvenida = document.querySelector("#bienvenida");
bienvenida.textContent = "Bienvenid@ " + cliente.nombre;

//query de los elementos del menu
const combos = document.querySelector(".combos");




const obtenerInfo = (e) => {
    const skuMenu = e.target.getAttribute("sku");
    const menuElegido = combo.find((comida) => comida.sku == skuMenu);
    comida.push(menuElegido);
    localStorage.setItem("carrito", JSON.stringify(comida));
    console.log(localStorage.carrito);
}

const combMenu = () => {
    combo.forEach((comb) => {
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

combMenu();
