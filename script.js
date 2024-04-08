const form = document.getElementById('signupForm');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const userData = {};
  for (const [key, value] of formData.entries()) {
    userData[key] = value;
  }
  displayUserData(userData);
});

form.addEventListener('reset', function() {
  outputDiv.innerHTML = '';
});

function displayUserData(userData) {
  let outputHtml = '<h2>Submitted Information:</h2>';
  outputHtml += '<p>';
  for (const key in userData) {
    outputHtml += `<strong>${key}:</strong> ${userData[key]}<br>`;
  }
  outputHtml += '</p>';
  outputDiv.innerHTML = outputHtml;
}

const inputFields = form.querySelectorAll('input, textarea, select');
inputFields.forEach(field => {
  field.addEventListener('blur', function() {
    if (field.value === '') {
      field.classList.add('error');
    } else {
      field.classList.remove('error');
      field.classList.add('success');
    }
  });
  field.addEventListener('focus', function() {
    field.classList.remove('error', 'success');
  });
});
