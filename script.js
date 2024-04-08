<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Learning Website Sign-Up</title>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>

<form id="signupForm">
  <fieldset>
    <legend>Sign Up</legend>
    <div>
      <label for="name">Name:</label><br>
      <input type="text" id="name" required onblur="validateInput(this)">
    </div>
    <div>
      <label for="username">Preferred Username:</label><br>
      <input type="text" id="username" required onblur="validateInput(this)">
    </div>
    <div>
      <label for="password">Password:</label><br>
      <input type="password" id="password" required onblur="validateInput(this)">
    </div>
    <div>
      <label for="email">Email:</label><br>
      <input type="email" id="email" required onblur="validateInput(this)">
    </div>
    <div>
      <label for="address">Address:</label><br>
      <textarea id="address" required onblur="validateInput(this)"></textarea>
    </div>
    <div>
      <label for="interests">Interests:</label><br>
      <textarea id="interests" required onblur="validateInput(this)"></textarea>
    </div>
    <div>
      <label for="gender">Gender:</label><br>
      <select id="gender" required>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Prefer not to mention">Prefer not to mention</option>
      </select>
    </div>
  </fieldset>
  <br>
  <button type="submit">Submit</button>
  <button type="reset" onclick="clearForm()">Reset</button>
</form>

<fieldset>
  <legend>Submitted Information</legend>
  <div id="output"></div>
</fieldset>

<script src="script.js"></script>

</body>
</html>
