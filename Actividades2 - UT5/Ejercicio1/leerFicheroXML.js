function gestionarFicheroXML(xmlDoc){
	/*Recuperar la capa vacia*/
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<libros.length; i++){
		if(i == 3){
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class='amarillo'>" + libros[i].textContent + "</p>"
		}
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	}
}

loadDocA("libros.xml","xml");

