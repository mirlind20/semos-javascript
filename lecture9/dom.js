const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);
// // document.CO

document.body.onload = createAttribute;
document.body.onload = createElement;

function createElement() {
  const heading = document.createElement('h1');
  console.log(heading);
  
  const headingContent = document.createTextNode('Heading 1');
  heading.appendChild(headingContent);

  const currentP = document.getElementById('firstParagraph');
  document.body.insertBefore(heading, currentP);

  const button = document.createElement('button');
  button.innerText = 'Button';
  const getDivOne = document.getElementById('divOne');
  document.body.insertBefore(button, getDivOne);
}

function createAttribute () {
  const divNode = document.getElementById('divOne');
  // const divAttribute = document.createAttribute('class');
  // divAttribute.value = 'div-one';
  divNode.setAttribute('class', 'div-one');
}

document.body.onload = onClick;

function onClick () {
  const btn = document.getElementById('btn-language');

  btn.addEventListener('click', () => {
    const languages = document.getElementsByName('language');
    languages.forEach(language => {
      if (language.checked) {
        alert(`You are: ${language.value} developer`);
      }
    });
  });
}

document.body.onload = countHeadingTwo;

function countHeadingTwo () {
  const btn = document.getElementById('btn-count');

  btn.addEventListener('click', () => {
    const headings = document.getElementsByTagName('h2');
    alert(`The number of h2 tags: ${headings.length}`);
  })
}

const note = document.getElementsByClassName('note');
console.log(note[0].parentNode);


const parentElement = document.getElementById('unoredered-menu');
const firstChild = parentElement.firstChild;
console.log(firstChild);

const lastChild = parentElement.lastElementChild;
console.log(lastChild);

const children = parentElement.children;
console.log(children);


const menu = document.getElementById('unoredered-menu');

const newList = document.createElement('li');
newList.textContent = 'Team';
menu.appendChild(newList);
console.log(menu.innerHTML);

const newElement = `
  <li>About us!</li>
  <li>Meet us!</li>
`;

menu.innerHTML = newElement;

function createMenuItem(name) {
  const li = document.createElement('li');
  li.textContent = name;
  return li;
}

const getMenu = document.getElementById('menu');

getMenu.appendChild(createMenuItem('Home'));
getMenu.appendChild(createMenuItem('About us!'));
getMenu.appendChild(createMenuItem('Services'));


const app = document.getElementById('app');

const langs = ['JavaScript', 'HTML', 'CSS'];

const nodes = langs.map(lang => {
  const li = document.createElement('li');
  li.textContent = lang;
  return li;
});

app.append(...nodes);


