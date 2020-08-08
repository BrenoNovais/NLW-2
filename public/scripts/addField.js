// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. que campos?
    const newFildContainer = document.querySelector('.schedule-item'). cloneNode(true) // Boolean: true or false

    // Pegar os campos. Que campos?
    const fields = newFildContainer.querySelectorAll('input')

    // Para cada campo, limpar.
    fields.forEach(function(field) {
        // Pega o field do momento e limpa ele
        field.value = ""
    })
     
    // Colocar na página. Onde?
    document.querySelector('#schedule-items').appendChild(newFildContainer)
}