function displayUserData(userData) {
  let outputHtml = '<h2>Submitted Information:</h2>';
  outputHtml += '<p>';
  for (const key in userData) {
    outputHtml += `${key}: ${userData[key]}<br>`;
  }
  outputHtml += '</p>';
  outputDiv.innerHTML = outputHtml;
}
