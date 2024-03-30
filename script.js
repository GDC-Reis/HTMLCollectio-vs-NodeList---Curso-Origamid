// HTMLCollection vs NodeList
// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornara com querySelectorAll é estática.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens 
console.log(gridSectionNode); // 3 itens

// Array Like
// HTMLCollection e NodeList são array-like, parecem uma array mas não são.
// O método do Array forEach() por exemplo, existe apenas em NodeList.

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, index, array){
    gridItem.classList.add('azul');
    console.log(index); // index do item no array
    console.log(array); // o array completa
})

// É possivel transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
/* Exemplo

 const gridSectionHTML = document.getElementsByClassName('grid-section');
 const arrayGrid = Array.from(gridSectionHTML) 
 
 */



// Exercicios

// Retorne no cosole todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img);

// Retorne no console apenas as imagens que começam coma a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2')
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);