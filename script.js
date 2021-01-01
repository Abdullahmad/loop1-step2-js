const options = [
    'Positive',
    'Negative',
    'Neutral'
]

const positiveTab = document.querySelector('#positive');
const negativeTabs = document.querySelector('#negative');
const neutralTab = document.querySelector('#neutral');
const tabLinks = document.querySelectorAll('.tablinks');
const charges = document.querySelector('charge');
const contents = document.querySelector('.content')

tabLinks.addEventListener('click', () => {
    contents.push(...options)
})

tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', () => {
        removeActive();
        tabLink.classList.add('active');
    })
})

const removeActive = () => {
    tabLinks.forEach(tabLink => {
        tabLink.classList.remove('active');
    })
}