## Online Shopping Cart

## Instructions

### To run the app locally
1. Install dependencies - it might take a while (!)
    ```
    $ yarn/npm install
    ```    
5. Checkout to the application
    ```
    $ yarn/npm start
    ```  
### To run test
I chose Jest as a test runner, as it requires almost no configuration and provides useful features such as parallel testing, intelligent test watching and coverage report out of the box.

1. Install dependencies.
2. Run all the test at once.
    ```
    $ npm/yarn test
3. Run test in a watch mode.
    ```
    $ npm/yarn test:watch

## Approach

### Features
With the time given, I have chosen a combination of features and a clean and simple user interface to structure the application. I then followed agile development approach to develop the application.

With this application, users can:
- see all the available products and an empty shopping cart on page load
- add and remove product to and from shopping cart and see the changes caused by their actions on shopping card and the product stock
- able to apply various discount vouchers against the total amount of the bill

### Main frameworks and libraries
- React, Redux, JavaScript, Webpack, Babel, Bootstrap, HTML & CSS

### Application architecture
The frontend serves as an interface with the user. I aimed to achieve a simple yet attracting and user-friendly design. The data is imported for a flat to the application state which then get manipulated with user interaction. 

### Possible Improvements
I am aware that I have only managed to write very few tests. If I had more time I would have written tests for actions, reducers and helper functions. I fully understand the importance of testing in software development.

## Authour

Prabesh Shah