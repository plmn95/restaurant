import rectangle from './images/rectangle.png'

const renderAbout = function () {
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
}

export {
    renderAbout
}