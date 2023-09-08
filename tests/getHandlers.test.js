// eslint-disable-next-line no-undef
const config = require('../config');


// GET test 1 checks that getting a list of available warehouses returns a 200 status code


test('Should return 200 status code', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		//Assigning the actual response status to the actualStatusCode variable
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	//Checking that the actual status is 200
	expect(actualStatusCode).toBe(200);
});


// GET test 2 checks that the correct json body response is recieved for one of the warehouse names


test('Response body should contain warehouse name', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		//Assigning the json response to the actualResponseBody variable
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	// Checking that the actual response matches the warehouse name
	expect(actualResponseBody[0].name).toBe("Everything You Need");
});