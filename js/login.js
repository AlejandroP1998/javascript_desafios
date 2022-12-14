/* Objetivo -> Obtener datos del formulario del login */
//Informacion del cliente
const cliente = new Object;

//Eventos al pasar el mouse sobre los inputs tipo text
// -> Boton del nombre
const text1 = document.getElementById("nombre");

text1.onmouseover = () => {
    text1.style.backgroundColor = "#000";
    text1.style.color = "#fff";
}

text1.onmouseout = () => {
    text1.style.backgroundColor = "#fff";
    text1.style.color = "#000";
}

//-> Boton del apellido
const text2 = document.getElementById("apellido");

text2.onmouseover = () => {
    text2.style.backgroundColor = "#000";
    text2.style.color = "#fff";
}

text2.onmouseout = () => {
    text2.style.backgroundColor = "#fff";
    text2.style.color = "#000";
}

//Recibir la informacion del cliente
// -> Boton de envio
const enviar = document.getElementById("enviar");

enviar.onmouseover = () => {
    enviar.style.backgroundColor = "red";
    enviar.style.color = "#fff";
}

enviar.onmouseout = () => {
    enviar.style.backgroundColor = "#fff";
    enviar.style.color = "#000";
}

enviar.onclick = () => {

    if (!text1.value || !text2.value) {
        Swal.fire({
            icon: 'error',
            title: 'No llenaste todos los campos',
            text: 'Por favor revisa que todos los campos esten llenos para proceder al menu'
        })
    } else {
        cliente.nombre = text1.value;
        cliente.apellido = text2.value;
        cliente.consumo = document.getElementById("consumo").value;
        localStorage.setItem("cliente", JSON.stringify(cliente));
        //array de compras en el carrito
        let carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        setTimeout(()=>{
            Swal.fire({
                icon: 'success',
                title: 'Informacion aceptada',
                showConfirmButton: false
            })
        },0);

        setTimeout(()=>{
            location.href = "./layout/inicio.html"
        },2000);
    }

}

/* Obtuvimos la informacion del cliente por medio de la creacion de un objeto y
se opto por almacenarla en el localStorage ya que este mantengra la informacion hasta que 
el usuario salga del navegador y la informacion del cliente nos servira en todas las paginas HTML */