const cliente = JSON.parse(localStorage.cliente);
let comida = JSON.parse(localStorage.carrito);
console.log(comida);

//query de los elementos del menu
const combos = document.querySelector(".combos");
const info = document.querySelector(".datos");
const total = document.querySelector(".costos")

const costos = () => {
    const totalC = comida.reduce((ac, el) => ac + el.precio, 0);
    total.innerHTML = `
    <h2>Total de consumo: $${totalC}</h2>
    <h2>Propina (10%): $${totalC*0.1}</h2>
    <h2>Total a pagar: $${totalC + totalC*0.1}</h2>
    
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
    comida.forEach((com)=>{
        if(com.sku == skuMenu && encontrado == false){
            encontrado = true;
        }else{
            nuevo.push(com);
        }
    });
    comida = nuevo;
    console.log(comida);
    localStorage.setItem("carrito", JSON.stringify(comida));
    location.reload();
}

const combMenu = (comida) => {
    comida.forEach((comb) => {
        const menu = document.createElement("div");
        menu.classList.add("menu");
        menu.innerHTML = `
        <img src="${comb.url}" alt="${comb.nombre}">
        <div>
            <h3>${comb.nombre}<br>$${comb.precio}</h3>
            <hr>
            <p>${comb.descripcion}</p>
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
}
infoCliente();
combMenu(comida);
costos();
