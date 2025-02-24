import imgSushi from './images/menu/sushi.png'
import imgOysters from './images/menu/oysters.png'
import imgShrimps from './images/menu/shrimps.png'
import imgBao from './images/menu/bao.png'
import imgMystery from './images/menu/random.png'

class Item {
    constructor(img, name, price) {
        this.img = img
        this.name = name
        this.price = price
    }
}

function createMenuItem(item) {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const img = document.createElement('img')
    img.src = item.img
    menuItem.append(img)

    const info = document.createElement('div')
    info.classList.add('menu-item-info')
    menuItem.append(info)

    const name = document.createElement('p')
    name.innerText = item.name

    const price = document.createElement('p')
    price.innerText = item.price

    info.append(name, price)

    return menuItem
}

const sushi = new Item(imgSushi, 'a sushi', '$13')
const oysters = new Item(imgOysters, '14 oysters', '$99')
const shrimps = new Item(imgShrimps, 'sea bug platter', '$20')
const bao = new Item(imgBao, 'bao zi', '$3')
const mystery = new Item(imgMystery, 'mystery item', '$15')

const menuItems = [sushi, oysters, shrimps, bao, mystery]

const menuContainer = document.createElement('div')
menuContainer.classList.add('menu-container')

const rowFirst = document.createElement('div')
rowFirst.classList.add('row-first')

const rowSecond = document.createElement('div')
rowSecond.classList.add('row-second')

menuContainer.append(rowFirst, rowSecond)

menuItems.slice(0, 3).forEach(item => {
    const menuElement = createMenuItem(item)
    rowFirst.append(menuElement)
})

menuItems.slice(3).forEach(item => {
    const menuElement = createMenuItem(item)
    rowSecond.append(menuElement)
})

const divMessage = document.createElement('div')
divMessage.classList.add('div-message')
const message = document.createElement('p')
message.classList.add('message')
message.innerText = '*Menu items rotate on a monthly basis'
divMessage.append(message)

function appendMenu() {
    const container = document.getElementById('content')
    container.append(menuContainer, divMessage)
}

export default appendMenu