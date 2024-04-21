# Sprint 7 project

Project 7 by Landon Parris

In this project, I had to create javaScript code (in Visual Studio Code) to do positive testing on the Urban Grocers API, as and use npx jest to test these codes. I also used Postman to test the endpoints GET, POST, PUT, and DLELTE in the Urban Grocers API. I used javaScript commands such as const, let, try, catch, and expect in my code

Pre Conditions
1. Copy Urban Grocers API URL to the config.js file in the hm07-qa-us folder
2. Run "npm install"  in your console in the hm07-qa-us folder 

Testing getHandlers    "GET" URL/api/v1/warehouses
1. GET test 1 checks that getting a list of available warehouses returns a 200 status code
2. GET test 2 checks that the correct json body response is recieved for one of the warehouse names
--to run these codes enter "npx jest tests/getHandlers.test.js" in the console while in the hm07-qa-us folder. 

Testing postHandlers   "POST" URL/api/v1/couriers/check
1. POST test 1 checks getting a delivery cost returns a 200 status code
2. POST test 2 checks the the correct delivery cost is shown in response
--to run these codes enter "npx jest tests/postHandlers.test.js" in the console while in the hm07-qa-us folder.

Testing putHandlers    "PUT" URL/api/v1/products/1
1. PUT test 1 checks that making a change to the price of an item returns a 200 status code
2. PUT test 2 checks making a change to the price of an item reflects the correct respons of "true"
--to run these codes enter "npx jest tests/putHandlers.test.js" in the console while in the hm07-qa-us folder.

Testing deleteHandlers  "POST" URL/api/v1/kits then "DELETE" URL/api/v1/kits/7
1. DELETE test 1 creates a kit then deletes it to validate a 200 status code is returned
2. DELETE test 2 creates a kit then deletes it to validate a "true" response is returned
--to run these codes enter "npx jest tests/deleteHandlers.test.js" in the console while in the hm07-qa-us folder.
