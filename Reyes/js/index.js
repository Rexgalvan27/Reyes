const REYES=['hades','poseidon','zeus'];
document.querySelector("body").insertAdjacentHTML
("beforeend",
`
<main>
<div class="ventana">
<h1> Selecciona tu Cita con un Dios(100$)</h1>
<section class="reservas">
</section>
</div>
</main>
`);


for(rey of REYES){
    document.querySelector(".reservas").
    insertAdjacentHTML('beforeend',
    `
    <div class="posibilidad" jab="${rey}">
        <img src="img/${rey}.png" alt="Rey ${rey}"/>
        <div class="texto"> ${rey} </div>
        <button>Reservar</button>
    `)

    let actual=document.querySelectorAll("button").
    length-1;
    document.querySelectorAll("button")[actual].
    onclick=reservar;
}
function reservar(){
    let valor=this.parentNode.getAttribute("jab");
    document.querySelector("h1").innerHTML=`has
    reservado cena con <span class="verde">${valor}</span> uwu</h1>`;

    document.querySelector(".reservas").
    innerHTML=`<img src="img/${valor}.png" 
    alt="${valor}"/>`;
    document.querySelector(".reservas").classList.add
    ("fondo");
}