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
  document.getElementById("submittedInfo").style.display = "none";
}

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  var userInfo = "<h2>Submitted Information:</h2>";
  formData.forEach(function(value, key) {
    userInfo += "<p><strong>" + key + ":</strong> " + value + "</p>";
  });
  document.getElementById("output").innerHTML = userInfo;
  document.getElementById("submittedInfo").style.display = "block";
});
