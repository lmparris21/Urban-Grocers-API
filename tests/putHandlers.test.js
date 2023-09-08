// eslint-disable-next-line no-undef
const config = require('../config');
// creating a request body to change the price from 2 to 3
const requestBody = {   
"id": 1,
"name": "Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free",
"price": 3,
"weight": 473,
"units": "ml"
}



// PUT test 1 checks making a change to the price of an item returns a 200 status code


test('Should return 200 status code', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		//Assigning the actual response status to the actualStatusCode variable
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	//Checking that the actual status is 200
	expect(actualStatusCode).toBe(200);
});




// PUT test 2 checks making a change to the price of an item reflects the correct body response


test('Response body should contain "ok": true', async () => {
	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		//Assigning the json response to the actualResponseBody variable
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual response is true
	expect(actualResponseBody["ok"]).toBe(true);
});