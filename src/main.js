const contact = document.querySelector('#contact');
const btnAside = document.querySelector('.aside-btn');

btnAside.onclick = () => {
    contact.classList.toggle("active");
}