import { animate } from './helpers'
const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')

    modal.style.opacity = '0'
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            animate({
                duration: 500,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                  modal.style.opacity = progress
                }
              });
        })
    })
    
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}

export default modal