const submitButtons = document.querySelectorAll('.button-submit');

for (let submitButton of submitButtons) {
  submitButton.addEventListener('click', () => {
    alert('Your input has been submitted. Thank you!');
  });
}

