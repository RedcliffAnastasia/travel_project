const popup = document.querySelector('.popup');
const buttonSearch = document.querySelector('.button-main');
const enter = popup.querySelector('[id=enter]');
const exit = popup.querySelector('[id=exit]');
const children = popup.querySelector('[id=children]');
const adults = popup.querySelector('[id=adults]');
const buttonFound = popup.querySelector('.button-found');
const formMain = document.querySelector('.popup');
const storageEnter = localStorage.getItem('enter');
const storageExit = localStorage.getItem('exit');
const storageAdults = localStorage.getItem('adults');
const storageChildren = localStorage.getItem('children');
let isStorageSupport = true;

enter.addEventListener('focus', function (evt) {
  enter.classList.add('focused');
  enter.value = "";
});
enter.addEventListener('blur', function (evt) {
  enter.classList.remove('focused');
});

try {
  storageEnter = localStorage.getItem('enter');
  storageExit = localStorage.getItem('exit');
  storageAdults = localStorage.getItem('adults');
  storageChildren = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

buttonSearch.addEventListener('click', function (evt) {
  popup.classList.toggle('popup-show');
  evt.stopPropagation();
  if (storageEnter) {
    enter.placeholder = storageEnter;
    exit.focus();
  } else {
    enter.focus();
  }
  if (storageExit) {
    exit.value = storageExit;
    adults.focus();
  } else {
    exit.focus();
  }
  if (storageAdults) {
    adults.value = storageAdults;
    children.focus();
  } else {
    adults.focus();
  }
  if (storageChildren) {
    children.value = storageChildren;
  } else {
    children.focus();
  }
});

window.addEventListener('click', function () {
  if (popup.classList.contains('popup-show')) {
    popup.classList.toggle('popup-show');
  }
});

window.addEventListener('keydown', function (evt) {
  console.log(evt);
  if (evt.code === 'Escape') {
    if (popup.classList.contains('popup-show')) {
       popup.classList.remove('popup-show');
    }
  }
});

formMain.addEventListener('submit', function (evt) {
  if (!enter.value && !adults.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('enter', enter.value);
      localStorage.setItem('exit', exit.value);
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
});
