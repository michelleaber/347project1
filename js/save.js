const submitButton = document.getElementById('submit-button');
const name = document.getElementById('recipe-name');
const value = name.value;

submitButton.addEventListener('click', () => {
   setCookie(name, value, 30);
});

function setCookie(name, value, numDays) {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (numDays*24*60*60*1000));
    let expires = "expires="+ currentDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
 
  }

// function getCookie(name) {
// }