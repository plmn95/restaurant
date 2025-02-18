import rectangle from './images/rectangle.png'
import imgLineTop from './images/line-top.png'
import imgLineBot from './images/line-bot.png'

const container = document.getElementById('content')

const divHeader = document.createElement('div')
divHeader.classList.add('divHeader')

const title = document.createElement('h1')
title.innerText = 'SPACE BITES'
title.classList.add('title')

const subTitle = document.createElement('p')
subTitle.innerText = 'gourmet cuisine like you’ve never experienced before'
subTitle.classList.add('sub-title')

const banner = document.createElement('img')
banner.src = rectangle

const divText = document.createElement('div')
divText.classList.add('divText')

const text = document.createElement('p')
text.innerText = 'All-organic products, grown on-site in special biodomes,\nprepared with care and in accordance with\nthe latest Space health regulations'

const divMiddle = document.createElement('div')
divMiddle.classList.add('divMiddle')

const lineTop = document.createElement('img')
lineTop.src = imgLineTop

const hMiddle = document.createElement('h2')
hMiddle.classList.add('hMiddle')
hMiddle.innerText = '“A Celestial Culinary Experience”'

const lineBot = document.createElement('img')
lineBot.src = imgLineBot

const divBot = document.createElement('div')
divBot.classList.add('divBot')

const pLocation = document.createElement('p')
pLocation.classList.add('pLocation')
pLocation.innerText = `You can find us on planet Teegarden b - Equatorial region

                        Coordinates: RA 23h 59m 18.6496s | Dec +16° 52′ 53.251″
                        System: Teegarden’s Star`

const btnReserve = document.createElement('button')
btnReserve.classList.add('btnReserve')
btnReserve.innerText = 'Reserve a seat'

function appendAbout() {
    container.appendChild(divHeader)
    divHeader.appendChild(title)
    divHeader.appendChild(subTitle)

    container.appendChild(banner)

    container.appendChild(divText)
    divText.appendChild(text)

    container.appendChild(divMiddle)
    divMiddle.appendChild(lineTop)
    divMiddle.appendChild(hMiddle)
    divMiddle.appendChild(lineBot)

    container.appendChild(divBot)
    divBot.appendChild(pLocation)
    divBot.appendChild(btnReserve)
}

export default appendAbout