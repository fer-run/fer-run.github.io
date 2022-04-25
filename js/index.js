
let items = document.querySelectorAll('.item')

function scale() {
    for (let i = 0; i < items.length; i++) {
        items[i].style.transform = 'scale(1)'
    }
}
for (let j = 0; j < items.length; j++) {
    // 鼠标经过
    items[j].addEventListener('mouseover', function() {
        scale()
        this.style.transform = 'scale(1.05)'
        // 鼠标离开
        this.addEventListener('mouseout', function() {
            scale()
        })
    })
}

let nav = document.querySelector('.nav')
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        nav.style.transform = 'translateY(0)'
    } else {
        nav.style.transform = 'translateY(-50px)'
    }
})