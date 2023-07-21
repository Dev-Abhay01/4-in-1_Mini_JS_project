const form = document.getElementById('registrationForm');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const workshop = document.getElementById('workshop').value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Phone:', phone);
  console.log('Workshop Preferences:', workshop);

  form.reset();
  submitBtn.disabled = true;
});