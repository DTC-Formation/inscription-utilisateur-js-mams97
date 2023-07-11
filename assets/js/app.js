let inputNom = document.getElementById('nom')
let inputPrenom = document.getElementById('prenom')
let inputMail = document.getElementById('mail')
let inputAge = document.getElementById("age")
let inputMdp = document.getElementById("mdp")
let inputMdp2 = document.getElementById("mdp2")
let btn = document.getElementById('button')

btn.addEventListener('click', function(){
    
    let nom = inputNom.value
    let prenom = inputPrenom.value
    let mail = inputMail.value
    
    let text = document.getElementsByClassName('Texte')
    console.log(text)
    if (nom == '' || prenom =='' || mail == '') {
        for (let i = 0; i < text.length; i++) {
            const element = text[i]
            element.classList.add('text-danger')
            element.textContent = "remplir le champ"
        }
        
    } else {
        for (let i = 0; i < text.length; i++) {
            const element = text[i]
            element.classList.add('text-success')
            element.textContent = "accepter"
        }
    }
})

inputAge.addEventListener('change', function(){
    let age = parseInt(inputAge.value)
    console.log(typeof age)
    let text = document.getElementById('ageTexte')
    if (age <= 18) {
        text.classList.add('text-danger')
        text.textContent = "non acceper"
        btn.disabled = true
    } else {
        text.classList.add('text-success')
        text.textContent = "acceper"
        btn.disabled = false
    }   
})

inputMdp.addEventListener('change', function(){
    let mdp = inputMdp.value.length
    console.log(mdp)
    let text = document.getElementById('mdpTexte')
    if (mdp <= 8) {
        text.classList.add('text-danger')
        text.textContent = "mot de passe trop court, essayer avec 8 caractère"
        btn.disabled = true
    } else {
        text.classList.add('text-success')
        text.textContent = "accepter"
        btn.disabled = false
    }
})

inputMdp2.addEventListener('change', function(){
    let mdp = inputMdp.value.length
    let mdp2 = inputMdp2.value.length
    let text = document.getElementById('mdp2Texte')
    if (mdp === mdp2) {
        text.classList.add('text-success')
        text.textContent = "mot de passe confirmer"
        btn.disabled = true
    } else {
        text.classList.add('text-danger')
        text.textContent = "mot de passe réfuser"
        btn.disabled = false
    }
})