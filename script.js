const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const precentage = document.getElementById('precentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () =>{
        higlightCups(index)
    })
})

function higlightCups (index) {

    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        index--
       
    }
    
    smallCups.forEach((cup, index2) =>{
        if (index2 <= index) {
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup () {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        precentage.style.visibility = 'hidden'
        precentage.style.height = 0
    }else {
        precentage.style.visibility = 'visible'
        precentage.style.height = `${fullCups / totalCups * 300}px`
        precentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
    
}