//DOM manipulation


//GetElementByID()

const title = document.getElementById('main-heading');

title.style.color = 'red';

console.log(title);

//GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');

for(let i = 0; i < listItem.length; i++) {
    listItem[i].style.color = 'green';
}

console.log(listItem);


//GetElementByTagNAme()

const listItems = document.getElementsByTagName('li');

console.log(listItems);


//QuerySelector()

const container = document.querySelector('div');

console.log(container);


//QuerySelectorAll()

const divs = document.querySelectorAll('div');

console.log(divs);

