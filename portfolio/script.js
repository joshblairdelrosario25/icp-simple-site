// Example of simple interactivity: Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!name || !email || !date || !time) {
    alert("Please fill out all the fields.");
    e.preventDefault();
  }
});