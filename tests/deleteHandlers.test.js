// eslint-disable-next-line no-undef
const config = require('../config');
// creating a request body to create a new kit so it can be deleted
const requestBody = {
	"name": "My kit",
	"cardId": 1
	  }
	
// DELETE test 1 creates a kit then deletes it to validate a 200 status code is returned


test('Should return 200 status code', async () => {
    let postStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			//using a POST request to create the kit
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
			//Assigning the json response body to the postStatusCode variable
			postStatusCode = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			//using a DELETE request to delete the kit to get response
			method: 'DELETE',
		});
		//Assigning the actual response status to the actualStatusCode variable
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	//Checking that the actual status is 200
	expect(actualStatusCode).toBe(200);
});


// DELETE test 2 creates a kit then deletes it to validate a "true" response is returned


test('Kit should be deleted', async () => {
    let postResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			//using a POST request to create the kit
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				},
				body: JSON.stringify(requestBody)
			});
			//Assigning the json response body to the postResponseBody variable
			postResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			//using a DELETE request to delete the kit to get response
			method: 'DELETE',
		});
		//Assigning the actual response body to the actualResponseBody variable
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual response is true
	expect(actualResponseBody["ok"]).toBe(true);
});

















