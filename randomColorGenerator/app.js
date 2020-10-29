const colorBtn = document.querySelector('#btn-1')
const boxes = document.querySelectorAll('.box')

let running = false

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color 
}

function changeColours() {
    if(running) {
        boxes.forEach(color => {
            color.style.background = getRandomColor()
        })
        setTimeout(changeColours, 500)
    }
}

function toggleColors(){
    colorBtn.innerText = 'stop'
    if(running) {
        running = false
        colorBtn.innerText = 'change color'
    } else {
        running = true
        changeColours()
    }
}