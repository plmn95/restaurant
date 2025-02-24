import imgReserve from './images/reserve.png'

const reservation = document.createElement('div')
reservation.classList.add('reservation')

const image = document.createElement('img')
image.src = imgReserve

const form = document.createElement('form')
form.classList.add('form-reservation')

const message = document.createElement('p')
message.classList.add('form-message')
message.innerText = `Please fill out the form below to book a table. 
Make sure to arrive no later than 15 minutes from the reserved hour, otherwise your seats may no longer be available.`
form.append(message)

function createInput(type, name, placeholder) {
    const field = document.createElement('input')
    Object.assign(field, { type, name, placeholder })
    field.classList.add('input')
    return field
}

const formFields = [
    { type: 'text', name: 'name', placeholder: 'First and last name:' },
    { type: 'email', name: 'email', placeholder: 'Email:' },
    { type: 'tel', name: 'number', placeholder: 'Phone number:' },
    { type: 'number', name: 'guests', placeholder: 'Number of guests:' },
    { type: 'date', name: 'date', placeholder: 'Date:' },
    { type: 'time', name: 'time', placeholder: 'Time:' }
  ]

formFields.forEach(fieldConfig => {
    form.append(createInput(fieldConfig.type, fieldConfig.name, fieldConfig.placeholder))
})

const btnConfing = {
    type: 'submit', name: 'submit', value: 'Reserve a seat'
}
const btnSubmit = document.createElement('input')
Object.assign(btnSubmit, btnConfing)
btnSubmit.classList.add('btn-submit')
form.append(btnSubmit)

reservation.append(image, form)

function appendReservation() {
    const container = document.getElementById('content')
    container.append(reservation)
}

export default appendReservation