Node JS unit testing with Mocha

- First you need to install de dependencies with - npm install
- To run the test you need to use - npm run test

1. With SPY in unit testing you can know:

   > - Has function been called?
   > - If yes, how many times?
   > - What arguments?
   > - Did it return something?
   > - If yes, hat was returned?

2. Mock

   > Mocking is avoid the actual call to a function and instead of the actual call, we just use a dummy call

3. Stub

   > Stub is assume that some function that is called in the tested function is returning some particular value

4. Testing promises

   > You can test promises, with the timeout you can set the time of wait of the test (by default is 2seconds) and with the parameter done you can set the moment when the promise is finished
