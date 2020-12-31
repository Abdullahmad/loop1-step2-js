const positiveTab = document.querySelector('#positive');
const negativeTabs = document.querySelector('#negative');
const neutralTab = document.querySelector('#neutral');
const tabLinks = document.querySelectorAll('.tablinks');
const charges = document.querySelector('charge')
negativeTabs.addEventListener('click', () => {
    // removeActive();
    negativeTabs.classList.add('active')
})

// const removeActive = () => {
//     charges.forEach(element => {
//         element.classList.remove('active')
//     })
// }

function render() {

}