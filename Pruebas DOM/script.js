//Ejercicio 1
const parrafo = document.querySelectorAll('.parrafo');
const container = document.querySelector('.container');
cont = 0;


parrafo.forEach(element => {
    cont += element.textContent.length;
    element.style.background = 'red';
});

//Ejercicio 2

const p = document.createElement('p');
p.textContent = 'Palabras: ' + cont;
document.body.insertAdjacentElement('afterbegin', p);


//Ejercicio 3
const a = document.querySelector('a');

a.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.insertAdjacentText('afterbegin', a.href);
});

//Ejercicio 4
const img = document.createElement('img');
img.setAttribute('src', 'img.jpg');
container.appendChild(img);