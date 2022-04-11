let dropdown = document.getElementById('interests');

function displayParagraph() {
    if (dropdown.value === 'coding') {
        document.getElementById('coding').textContent = "Coding has become fun! I enjoy discovering new ways to complete the same problem."
    } else if (dropdown.value === 'outdoors') {
        document.getElementById('outdoors').textContent = "I enjoy hiking, backpacking, and rock climbing."
    } else if (dropdown.value === 'indoors') {
        document.getElementById('indoors').textContent = "I also love playing video games and knitting."
    }
}

dropdown.addEventListener('change', displayParagraph)


let colorBtn = document.getElementById('color');
let placeBtn = document.getElementById('place');
let ritualBtn = document.getElementById('ritual');

const buttons = document.querySelectorAll('button');

const alertBtn = (e) => {
    if (e.target === colorBtn) {
        alert('My favorite color is orange.')
    } else if (e.target === placeBtn) {
        alert('My favorite place is Red River Gorge!')
    } else if (e.target === ritualBtn) {
        alert('My favorite ritual is going on a hike after a long week.')
    }
}

buttons.forEach(e => {
    e.addEventListener('click', alertBtn);
    e.classList.add('styleMe');
})
// console.log(buttons)
