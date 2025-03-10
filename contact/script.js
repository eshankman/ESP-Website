function addBodyToEmail() {
  // Get the values from the form
  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const subjectText = document.getElementById("subject").value; // Get the content of the subject textarea

  // Construct the body of the email with proper line breaks using %0A
  const body = "Name: " + encodeURIComponent(name) + "%0A" +
               "Company: " + encodeURIComponent(company) + "%0A" +
               "Phone: " + encodeURIComponent(phone) + "%0A" +
               "Email: " + encodeURIComponent(email) + "%0A" +
               "Message: " + encodeURIComponent(subjectText); // Use subject text as the message body

  // Redirect the form action to mailto with fixed subject and dynamic body
  window.location.href = "mailto:ellen@erstoys.com?subject=" + encodeURIComponent("ESP Web Submittal") + "&body=" + body;

  // Clear the form fields after submission
  document.forms["EmailForm"].reset();

  // Prevent the default form submission
  return false;
}

const axios = require('axios');
const fs = require('fs');

// Path to your request.json file
const jsonFilePath = './request.json';

// Read the contents of request.json
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Parse the JSON data
  const requestData = JSON.parse(data);

  // Define the API endpoint and your API key
  const url = 'https://recaptchaenterprise.googleapis.com/v1/projects/esp-website-1735479058681/assessments?key=API_KEY';

  // Send the POST request
  axios.post(url, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    console.log('Success:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
});
