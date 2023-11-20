const get = (target)=>{
    return document.querySelector(target)
}

const carousel = get('.carousel')
const cellCount = 6
let selectedIndex=0
const prevButton=get('.prev_button')
const nextButton=get('.next_button')

const rotateCarousel=()=>{
    const angle = (selectedIndex/cellCount)*-360
    carousel.style.transform = 'translateZ(-346px) rotateY(' + angle + 'deg)'
}

prevButton.addEventListener('click',()=>{
    selectedIndex--
    rotateCarousel()
})

nextButton.addEventListener('click',()=>{
    selectedIndex++
    rotateCarousel()
})