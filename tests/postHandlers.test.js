// eslint-disable-next-line no-undef
const config = require('../config');
// creating a request body 
const requestBody = {
	"deliveryTime": 10,
	"products": [
	  {
		"id": 25,
		"quantity": 10
	  }
	]
}
// POST test 1 checks getting a delivery cost returns a 200 status code
test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
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



// POST test 2 test the the correct delivery cost is shown in response


test('Response body should contain courier name and delivery price', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
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
	// Checking that the actual response matches the delivery cost
	expect(actualResponseBody["Speedy"]).toEqual({"deliveryPrice": 7});
});