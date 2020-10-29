window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".audio")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colors = [
        "rgb(63, 184, 93)",
        "rgb(206, 114, 53)",
        "rgb(222, 85, 240)",
        "rgb(250, 248, 106)",
        "rgb(95, 12, 248)",
        "rgb(93, 199, 185)"
    ]
    
    console.log(sounds)
    
    //sound stuff
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0
            sounds[index].play()

            createBubbles(index)
        })
    })
    
    //bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease"

        bubble.addEventListener("animationend", function() {
            visual.removeChild(this)
        })
    }
})
