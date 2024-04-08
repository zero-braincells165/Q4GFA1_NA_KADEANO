function checkInput(input) {
  if (input.value.trim() === "") {
    input.classList.remove("filled");
    input.classList.add("empty");
  } else {
    input.classList.remove("empty");
    input.classList.add("filled");
  }
}

function highlightInput(input) {
  input.classList.remove("empty");
  input.classList.add("filled");
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.getElementById("gender").value;
  
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Gender: ${gender}</p>
  `;
}

function resetForm() {
  document.getElementById("signupForm").reset();
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
}
