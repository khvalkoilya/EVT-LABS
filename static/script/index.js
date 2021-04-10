// const fs = require('fs');

let next = 'open';

document.querySelector('.show-form__button').addEventListener('click', () => {

  switch(next) {

    case 'end': {
      next = 'shaking'
      document.querySelector('.show-form__button > span').innerHTML = 'Трясти'
      document.querySelector('.form__info').classList.remove('form__info-shaking')
      document.querySelector('.form__info').classList.remove('form__info-break')
      break;
    }
    case 'breaking': {
      next = 'end'
      document.querySelector('.show-form__button > span').innerHTML = 'Убрать'
      document.querySelector('.form__info').classList.add('form__info-break')
      break;
    }
    
    case 'shaking': {
      next = 'breaking'
      document.querySelector('.show-form__button > span').innerHTML = 'Сломать'
      document.querySelector('.form__info').classList.add('form__info-shaking')
      break;
    }

    case 'open': {
      next = 'shaking';
      document.querySelector('.show-form__button > span').innerHTML = 'Трясти'
      document.querySelector('.form__info').classList.add('form__info-opened')
    }
  }

  console.log(next)

})


ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7
  });
}

document.querySelector('form').addEventListener('submit', (event) => {
  const regExp = /[A-Za-z0-9.!$&*-=^`|~#%'+\/?_{}]+@[A-Za-z0-9-]+\.[A-Za-z]+/g;
  const emailInput = document.querySelector('input[name=email]');
  const email = emailInput.value;

  if(!email.match(regExp)) {
    event.preventDefault();
    emailInput.classList.add('input-error');
  } else {
    emailInput.classList.remove('input-error')
  }
})