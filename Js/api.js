const api_url = "https://my-json-server.typicode.com/Xavi1982/api_tpo_comision23038/db"

function mostrarEquipo (participante){
    const {Nombre, Puesto, imagen} = participante;
    const contenedorEquipo = document.querySelector(".contenedor");

    const title = document.createElement("h5");
    title.textContent = Nombre;

    const puestoParticipante = document.createElement("p");
    puestoParticipante.textContent = Puesto;

    const imagenParticipante = document.createElement("img");
    imagenParticipante.src = imagen;
    imagenParticipante. width = 200;

    const Tarjeta = document.createElement("article");
    Tarjeta.appendChild(imagenParticipante);
    Tarjeta.appendChild(title);
    Tarjeta.appendChild(puestoParticipante);
    Tarjeta.style.backgroundColor = "grey";

    contenedorEquipo.appendChild(Tarjeta);


}
async function obtenerEquipo(){
    try{
        const response = await fetch(api_url);
        const {base_datos} = await response.json();
        
        for(let i=0; i<base_datos.length; i++){
            mostrarEquipo(base_datos[i]);
        }

        console.log(base_datos);
    } catch(error){
        console.error(error)
    }
  

}
