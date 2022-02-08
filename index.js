import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import regExp from './modules/regExp'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'

timer('27 january 2023 14:00:00')
menu()
modal()
regExp()
tabs()
slider()
calc(100)
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
})