// Your code goes here


// --------------------------------
// Header
// --------------------------------
const logo = document.getElementsByClassName('logo-heading')[0];
const menuItem = document.getElementsByClassName('nav-link');
const headerImg = document.querySelectorAll('.intro img')[0];
const mainNav = document.querySelector('.main-navigation');

logo.addEventListener('mouseenter', function(event){
  event.target.style.color = 'pink';
})
logo.addEventListener('mouseleave', function(event){
  event.target.style.color = 'inherit';
})


// --------------------------------
// Main Content
// --------------------------------
const textSec = document.querySelectorAll('.text-content p');
const containerHome = document.querySelector('.container.home');
const visitMsg = document.getElementById('visit-msg');
const intro = document.querySelector('.intro');

headerImg.addEventListener('dblclick', function(event){
  TweenMax.to(headerImg, 2, {rotation:360});
})
document.addEventListener('keydown', function(event){
  for (let i = 0; i < textSec.length; i++){
    textSec[i].style.color = 'blue';
  }
})
document.addEventListener('drag', function(event){
  containerHome.style.background = 'rgba(255, 0, 0,0.5)';
})
document.addEventListener('dragend', function(event){
  containerHome.style.background = 'inherit';
})
document.addEventListener('contextmenu', function(event){
  alert(`Please don't copy and paste!`);
})
window.addEventListener('load', function(event){
  TweenMax.from(mainNav, 1, {x:-1000});
  TweenMax.from(intro, 1, {autoAlpha: 0, delay: .5});
})
document.addEventListener('scroll', function(event){
  visitMsg.style.display = 'block';
  visitMsg.textContent = "Thanks for visiting our site! Scroll to the bottom to sign up for a package!";
  TweenMax.to(visitMsg, 1, {opacity: 1});
})
window.addEventListener('resize', function(event){
  this.alert(`I've been resized!`);
})

// --------------------------------
// Contact Section
// --------------------------------
const destination = document.getElementsByClassName('destination');
const btn = document.querySelectorAll('.btn');

for(let i = 0; i < destination.length; i++){
  destination[i].addEventListener('click', function(event){
    destination[i].classList.toggle('purple-box'); 
    console.log('clicked destination');
  })
}
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(event){
    event.stopPropagation();
    btn[i].style.backgroundColor = 'none';
    console.log('clicked btn');
  })
}
for(let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', function(event){
  event.preventDefault();
  })
}
  


