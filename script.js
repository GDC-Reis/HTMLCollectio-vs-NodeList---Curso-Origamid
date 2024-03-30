// ID 
// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// Classe e Tag 
// getElementeByClassName e getElementByTagName
// selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo,
// significa que se elementos forem adicionado, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato'); // Seleciona apenas os elementos que tem as duas classes juntas

// Seleciona todas as UL´s, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);

// Seletor Geral Único
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS

const animais = document.querySelector('.animais');
const contatos = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]'); // Seleciona todos os item que sejam href e que começem com https://
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

// Seletor Geral Lista
// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const sectionGrid = document.querySelectorAll('.grid-section');
const lista = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[1]);