function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let animales = xmlDoc.querySelectorAll("animales")
	for(let i=0; i<animales.length; i++){
		if(i == 2){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='amarillo'>" + animales[i].textContent + "</p>"
		}
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + animales[i].textContent + "</p>"
	}
}

/* TE AÑADO AQUI LO DE LEER CAPA */
let capa = document.querySelector("div:nth-child(1)") 
capa.addEventListener("click",CargarFichero);
function CargarFichero()
{
	loadDocA("leerFicheroXML.xml","xml");
}


