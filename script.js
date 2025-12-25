const saleTrack = document.querySelector('.sale-track')
const saleSlides = document.querySelectorAll('.sale-slide')

let saleIndex = 0

setInterval(() => {
    saleIndex = (saleIndex + 1) % saleSlides.length
    saleTrack.style.transform = `translateX(${-saleIndex * 100}%)`
}, 5000)
