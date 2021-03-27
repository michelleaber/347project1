// const submitButton = document.getElementById('submit-button');
const submitButtons = document.querySelectorAll('.button-submit');
const name = document.getElementById('recipe-name');
const value = name.value;

for (let submitButton of submitButtons) {
submitButton.addEventListener('click', () => {
   setCookie(name, value, 30);
   alert('Your input has been submitted. Thank you!');
});
}


function setCookie(name, value, numDays) {
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (numDays*24*60*60*1000));
    let expires = "expires="+ currentDate.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
 
  }


// function getCookie(name) {
// }