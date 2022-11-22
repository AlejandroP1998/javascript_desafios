/* Creacion de los elementos de los diferentes menus */
//Estructura de cada menu
class menu{
    constructor(sku,nombre,precio,descripcion,url){
        this.sku = sku;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.url = url;
    }
}

/* Almacene toda la informacion a modo de que no maneje un peso que me cause problemas en el
localStorage -> cambiando el uso de imagenes descargadas por los enlaces de las mismas */
const comb1 = new menu(1,"Super Hamburguesa",300.00,"Super Hamburguesa, variedad de carnes, salsas, especias y vegetales.","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMW3ydBS0ClnnQpM0IB_oCB3VcLf3f98EVUIDFIJaMpqwbuN6Y");
const comb2 = new menu(2,"Pollo asado",500.00,"Pollo a las brasas, preservado con todos sus jugos acompañado con variedad de salsas.","https://dondejuana.com/static/productos/xxl/promo-pollo-a-la-brasa-dj-4.jpg");
const comb3 = new menu(3,"Mariscada",680.00,"Variedad de mariscos, variedad de preparaciones gourmet.","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8sucVvSoY0BMtb3naRE-5CnaVmpFONDnxCxZV9H6iUJkaNA-o");
const comb4 = new menu(4,"Caldo de mariscos",420.00,"Variedad de mariscos en un delicioso caldo con variedad de especias.","https://www.melarossa.it/wp-content/uploads/2020/12/zuppa-di-pesce-ricetta.jpg");
const entr1 = new menu(5,"Sopa de papa",110.50,"Sopa de papa, especialidad del chef.","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0GPWsIPgHS-OyGTeLOznnBCHmG3O7-Ex1STFZQ52IMbDfiq5a");
const entr2 = new menu(6,"Ensalada",50.00,"Ensalada variedad de vegetales, con salsa agridulce.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcyirIMGs5QeqdFZYmZEMvdVBYJN9cJW7H0kyItFU6T2X0xARB");
const entr3 = new menu(7,"Sopa de tomate",100.00,"Sopa de tomate con variedad de especias.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyx3TMBVmXZHASnL_7IzNubX2NvSXIN_jcO29yZeh-ZyI4CkV");
const entr4 = new menu(8,"Koctel de frutas",150.00,"Variedad de frutas con miel de abeja pura.","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0KS_aQuCaLLmqjv5oeAt_0Bt0BUtJNtBUMyz9FaWVhwhvvEkE");
const post1 = new menu(9,"Pie de manzana",130.50,"Pie de manzana, especialidad del chef.(4 porciones)","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEj3Lfa4zduBrskryNazTsuf0PHK8Q2OB_TUOwNPSqg2StwQ1w");
const post2 = new menu(10,"Rollos de canela",250.00,"Deliciosos rollos de canela con variedad de salsas dulces.(4 rollos)","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlrhN9MUvQAclB-Yn4iOLRqqPco-PuW9bLGo2VqoPupOrtzHGF");
const post3 = new menu(11,"Pie de queso",215.00,"Pie de queso, especialidad del chef.(4 porciones)","https://static.onecms.io/wp-content/uploads/sites/21/2017/03/29/pay-de-queso-al-horno.jpg-2000.jpg");
const post4 = new menu(12,"Pie de frutos rojos",250.00,"Pie de frutos rojos, especialidad del chef.(4 porciones)","https://crudoycocido.com/wp-content/uploads/2022/02/PIE-FRUTOS-ROJOS-27-1.jpg");
const banq1 = new menu(13,"Pollo entero asado",1110.50,"Pollo entero asado al carbon, con ensalada y jarra de la bebida de su elección.","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSM0Orza6_4U4YAM-oRXYlNuk2T5YpiesIB_8HZOuF_Pnrv_ocq");
const banq2 = new menu(14,"Super combo de hamburguesas",750.00,"Combo de hamburguesas XL, con papas fritas y la bebida de su elección.","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZmXhvweIyEYyv8qC1ahbc3NiPeLf9vZnx0EgNCnHwPmDRAGyC");
const banq3 = new menu(15,"Parrillada",3100.00,"Variedad de carnes, asadas al termino de su elección.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1H7yLVL9QQqWfKql5CCtzKjd1g7mAAiTeuG1I08PcwqYL2u1");
const banq4 = new menu(16,"Lasagna entera",1150.00,"Pirex de nuestra lasagna entera roja, variedad de quesos y salsa con especias.","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2CEX1ZOjLkMS8-y-u7dDXrK_tjKwHJR3Z-EYTbAbbIOT2NvA7");
const espe1 = new menu(17,"Pizza italiana",750.50,"Pizza italiana, especialidad del chef(10 porciones).","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7TIxGvrB8-PMF0zL00kpSP5znTssN-_9NaVPq6CzbKkTCdWzm");
const espe2 = new menu(18,"Pasta al pesto",450.00,"Pasta al pesto con varidad de especias Platillo con 5 estrellas.","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTRqCouiwGZGaEvae8smbj6Hpy0aFLL9I8ZznLxm-7DEOHOZuKr");
const espe3 = new menu(19,"Camarones al ajillo",1100.00,"Camarones al ajillo con variedad de especias Platillo 5 estrellas.","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSPqir8PDuZ1Ewvq5V4X7a-Kp_P4H9nKAr6uZz1Jkl4MccaF49m");
const espe4 = new menu(20,"Sushi variedad",550.00,"Variedad de sushi con salsa de anguila Platillo 5 estrellas.","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJMiyjgoZXQYYzGuPUuPRptKWRJu2pG9GllQdXnw9lSaloej2S");
const bebi1 = new menu(21,"Jarra de gaseosa",50.00,"Jarra de gaseosa a su eleccion (2L).","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRieaXCZnaEvVxCZVgv123IlJlzOXC7XpV3DeEt8qcaZZaoiVw7");
const bebi2 = new menu(22,"Jarra de té frio",10.00,"Jarra de té frio a su elección (2L).","https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9wDJMj-sbX4WBOzv8yU2w5jENUcpuCJlJghSs8bmvZ5XZLppJ");
const bebi3 = new menu(23,"Pichel de cerveza",100.00,"Cerveza a su elección, varidad de marcas (2L).","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQeJA2mZ0aHmpgOW7pp0OJma98p6Z4SML4ST1tCmn468GpN3lY5");
const bebi4 = new menu(24,"Jarra de fresco natural",150.00,"Fresco de frutas natural, varidad de frutas (2L).","https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRz0yxTUCyklwvv0XsdmirOxS-I8AJJr9YXdGHYHdsbXGK6oct0");

// -> arrays de los diferentes menus segun la pagina en que se encuentre el usuario

//Pagina de inicio
const combo = [comb1,comb2,comb3,comb4];
//pagina de entradas
const entrada = [entr1,entr2,entr3,entr4];
//pagina de postres
const postre = [post1,post2,post3,post4];
//pagina de banquetes
const banquete = [banq1,banq2,banq3,banq4];
//pagina de especialidades
const especialidad = [espe1,espe2,espe3,espe4];
//pagina de bebidas
const bebida = [bebi1,bebi2,bebi3,bebi4];


