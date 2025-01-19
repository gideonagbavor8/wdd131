const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

const listOfItems = document.createElement('li');

const deleteButton = document.createElement('button');

listOfItems.textContent = input.value;

deleteButton.textContent = '❌';

listOfItems.append(deleteButton);

list.append(li);