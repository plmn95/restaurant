import rectangle from './images/rectangle.png'
import imgLineTop from './images/line-top.png'
import imgLineBot from './images/line-bot.png'

function renderAbout() {
    const container = document.getElementById('content')

    const divHeader = document.createElement('div')
    divHeader.classList.add('divHeader')
    container.appendChild(divHeader)

    const title = document.createElement('h1')
    title.innerText = 'SPACE BITES'
    title.classList.add('title')
    divHeader.appendChild(title)
    const subTitle = document.createElement('p')
    subTitle.innerText = 'gourmet cuisine like you’ve never experienced before'
    subTitle.classList.add('sub-title')
    divHeader.appendChild(subTitle)

    const banner = document.createElement('img')
    banner.src = rectangle
    container.appendChild(banner)

    const divText = document.createElement('div')
    divText.classList.add('divText')
    container.appendChild(divText)

    const text = document.createElement('p')
    text.innerText = 'All-organic products, grown on-site in special biodomes,\nprepared with care and in accordance with\nthe latest Space health regulations'
    divText.appendChild(text)

    const divMiddle = document.createElement('div')
    divMiddle.classList.add('divMiddle')
    container.appendChild(divMiddle)

    const lineTop = document.createElement('img')
    lineTop.src = imgLineTop
    divMiddle.appendChild(lineTop)

    const hMiddle = document.createElement('h2')
    hMiddle.classList.add('hMiddle')
    hMiddle.innerText = '“A Celestial Culinary Experience”'
    divMiddle.appendChild(hMiddle)

    const lineBot = document.createElement('img')
    lineBot.src = imgLineBot
    divMiddle.appendChild(lineBot)

    const divBot = document.createElement('div')
    divBot.classList.add('divBot')
    container.appendChild(divBot)

    const pLocation = document.createElement('p')
    pLocation.classList.add('pLocation')
    pLocation.innerText = `You can find us on planet Teegarden b - Equatorial region

                            Coordinates: RA 23h 59m 18.6496s | Dec +16° 52′ 53.251″
                            System: Teegarden’s Star`
    divBot.appendChild(pLocation)

    const btnReserve = document.createElement('button')
    btnReserve.classList.add('btnReserve')
    btnReserve.innerText = 'Reserve a seat'
    divBot.appendChild(btnReserve)

    const line = document.createElement('hr')
    container.appendChild(line)
}

export {
    renderAbout
}