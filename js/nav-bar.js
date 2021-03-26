const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');
const options = document.getElementById('drop-down-items');
const dropDownMenu = document.getElementById('save-a-recipe');

menuButton.addEventListener('click', event => {
  navigation.classList.toggle('open');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  navigation.classList.remove('open');
});

dropDownMenu.addEventListener('click', event => {
  options.classList.toggle('open');
  event.stopPropagation();
});


