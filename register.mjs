import fetch from 'node-fetch';
import fs from 'fs/promises'; // Use the promises API for async file operations

// Read the JSON file
async function readFile() {
  const data = await fs.readFile('registration.json', 'utf8');
  return JSON.parse(data);
}

// Send POST request
async function sendRequest() {
  const registrationData = await readFile();

  try {
    const response = await fetch('http://20.244.56.144/test/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationData)
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

sendRequest();