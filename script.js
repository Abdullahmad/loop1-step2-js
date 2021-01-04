const options = [
    'Positive',
    'Negative',
    'Neutral'
]

let active = 'positive'

const positiveTab = document.querySelector('#positive');
const negativeTabs = document.querySelector('#negative');
const neutralTab = document.querySelector('#neutral');
const tabLinks = document.querySelectorAll('.tablinks');
const charges = document.querySelector('.charge');
const contents = document.querySelector('.content')

const render = () => {
    charges.innerHTML = options.map(option => (`<p class='tablinks ${active===option? 'active' : ''} ' data-key=${option}>${option.toUpperCase()}</p>`)).join('')

    contents.innerHTML = `${active} content`

}



charges.addEventListener('click', (e) => {
    const selected = e.target.dataset.key;
    console.log(selected);
    if (!selected)
        return;
    active = selected;
    render();


})

render()