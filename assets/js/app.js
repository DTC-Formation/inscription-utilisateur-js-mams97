let inputAge = document.getElementById("age")

inputAge.addEventListener('change', function(){
    let age = parseInt(inputAge.value)
    console.log(typeof age)
    let text = document.getElementById('ageTexte')
    if (age <= 18) {
        text.classList.add('text-danger')
        text.textContent = "non acceper"
    } else {
        text.classList.add('text-success')
        text.textContent = "acceper"
    }
    
})