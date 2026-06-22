document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Mensagem enviada com sucesso! Em breve entraremos em contato."
);

this.reset();

});