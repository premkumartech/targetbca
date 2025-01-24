const scriptURL = 'https://script.google.com/macros/s/AKfycbyf2hK2FI38WyWSqg-WWqimzI-KTkM84zeUOiIWgLacSUlWnKV_EU4TdBZfHBW6RJPqaA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})