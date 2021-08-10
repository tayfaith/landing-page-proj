/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// build the nav
var node = document.createElement('li');
document.querySelector('#navbar__list').appendChild(node);
node.classList.add('about');
var a = document.createElement('a');
a.href = "#about";
a.appendChild(document.createTextNode('About'));
node.appendChild(a);


var node1 = document.createElement('li');
document.querySelector('#navbar__list').appendChild(node1);
node1.classList.add('menu');
var a1 = document.createElement('a');
a1.href = "#menu";
a1.appendChild(document.createTextNode('Menu'));
node1.appendChild(a1);

var node2 = document.createElement('li');
document.querySelector('#navbar__list').appendChild(node2);
node2.classList.add('whats-new');
var a2 = document.createElement('a');
a2.href = "#whats-new";
a2.appendChild(document.createTextNode('What\'s New'));
node2.appendChild(a2);

var node3 = document.createElement('li');
document.querySelector('#navbar__list').appendChild(node3);
node3.classList.add('connect');
var a3 = document.createElement('a');
a3.href = "#connect";
a3.appendChild(document.createTextNode('Connect'));
node3.appendChild(a3);



//Determine which section user is on 
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul#navbar__list li');

window.addEventListener('scroll', () =>{
    let current = 'about';
    for (section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight/3) ){
            current = section.getAttribute('id');
        }
    }

// Set and remove sections as active. 
    navLi.forEach(li =>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})

