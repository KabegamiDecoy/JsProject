const regExp = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const formMessage = document.querySelector('#form2-message')

    const formNameFirst = document.querySelector('#form1-name')
    const formPhoneFirst = document.querySelector('#form1-phone')
    const formEmailFirst = document.querySelector('#form1-email')

    const formNameSecond = document.querySelector('#form2-name')
    const formPhoneSecond = document.querySelector('#form2-phone')
    const formEmailSecond = document.querySelector('#form2-email')

    const formNameThrid = document.querySelector('#form3-name')
    const formPhoneThrid = document.querySelector('#form3-phone')
    const formEmailThrid = document.querySelector('#form3-email')
    

    calcSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    calcCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })
    calcDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")
    })

    formNameFirst.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я ]/, "")
    })
    formPhoneFirst.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9()+ \^-]/, "")
    })
    formEmailFirst.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!`*' \^-]/, "")
    })


    formNameSecond.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я ]/, "")
    })
    formPhoneSecond.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9()+ \^-]/, "")
    })
    formEmailSecond.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!`*' \^-]/, "")
    })

    formNameThrid.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я ]/, "")
    })
    formPhoneThrid.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9()+ \^-]/, "")
    })
    formEmailThrid.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9@_.!`*' \^-]/, "")
    })
    formMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я 0-9.,!?:; \^-]/, "")
    })
}

export default regExp