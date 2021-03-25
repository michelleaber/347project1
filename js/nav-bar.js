const navigation = document.getElementById('navigation');
const menuButton = document.getElementById('menu-button');
const dropDownMenu = document.getElementById('save-a-recipe');

menuButton.addEventListener('click', event => {
  navigation.classList.toggle('open');
  event.stopPropagation();
});

document.addEventListener('click', () => {
  navigation.classList.remove('open');
});
console.log(dropDownMenu);
dropDownMenu.addEventListener('click', event => {
  console.log(dropDownMenu.classList);
  dropDownMenu.classList.toggle('open');
  event.stopPropagation();
});


