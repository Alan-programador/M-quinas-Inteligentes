let pantalla = document.getElementById("img_pres");
let tapar = document.getElementById("tapar");

pantalla.addEventListener("mouseover", () => {
	tapar.style.opacity = 0;
	
})

pantalla.addEventListener("mouseout", () => {
	tapar.style.opacity = 1;
})

tapar.addEventListener("mouseover", () => {
	tapar.style.opacity = 0;
})
