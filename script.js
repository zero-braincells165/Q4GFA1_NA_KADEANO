function validateInput(input) {
  if (input.value.trim() === "") {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    input.classList.add("success");
  }
}

function clearForm() {
  document.getElementById("signupForm").reset();
  document.getElementById("output").innerHTML = "";
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  var formData = new FormData(this);
  var userInfo = "<h2>Submitted Information:</h2>";
  for (var pair of formData.entries()) {
    userInfo += "<p><strong>" + pair[0] + ":</strong> " + pair[1] + "</p>";
  }
  outputDiv.innerHTML = userInfo;
});
