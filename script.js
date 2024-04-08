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
  var formData = new FormData(this);
  var userInfo = "<h2>Submitted Information:</h2>";
  for (var pair of formData.entries()) {
    var label = document.querySelector('label[for="' + pair[0] + '"]').textContent;
    userInfo += "<p><strong>" + label + ":</strong> " + pair[1] + "</p>";
  }
  document.getElementById("output").innerHTML = userInfo;
});
