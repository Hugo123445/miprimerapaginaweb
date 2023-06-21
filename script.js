function showAlert() {
    alert("¡Hola, esta es una alerta desde JavaScript!")
}

const form = document.getElementById('myForm')

function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
    const input = document.getElemnetById("email")
    const inputavalue = input.value
    
    if (!validateEmail(inputValue)) {
        alert('porfavor ingrese un correo electronico valido.')
    } else {
        alert('correo electronico enviado correctamente.')
    }
}

form.addEventListener("submit", function(lala) {
  lala.preventDefault()
  validateForm();
})

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})