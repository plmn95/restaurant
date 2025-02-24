import './styles.css'
import appendAbout from './tabAbout'
import appendMenu from './tabMenu'
import appendReservation from './tabReserve'

document.addEventListener('DOMContentLoaded', () => {
    const menuController = (function() {
        const menuButtons = document.querySelectorAll('.btnMenu')
        menuButtons.forEach(button => {
            button.addEventListener('click', () => {
                menuButtons.forEach(btn => btn.style.textDecoration = 'none')
                clearPage()
                switch(button.id) {
                    case 'btnAbout':
                        button.style.textDecoration = 'underline'
                        appendAbout()
                        break
                    case 'btnMenu':
                        button.style.textDecoration = 'underline'
                        appendMenu()
                        break
                    case 'btnReserve':
                        button.style.textDecoration = 'underline'
                        appendReservation()
                        break
                }
            })
        })
    })()
})

function clearPage() {
    const container = document.getElementById('content')
    container.replaceChildren()
}

appendAbout()