let inputAge = document.getElementById("age")
let inputMdp = document.getElementById("mdp")
let inputMdp2 = document.getElementById("mdp2")

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

inputMdp.addEventListener('change', function(){
    mdp = inputMdp.value.length
    console.log(mdp)
    let text = document.getElementById('mdpTexte')
    if (mdp <= 8){
        text.classList.add('text-danger')
        text.textContent = "mot de passe trop court, essayer avec 8 caractère"
    } else {
        text.classList.add('text-success')
        text.textContent = "accepter"
    }
})