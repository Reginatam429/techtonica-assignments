// If you want to just run 
//const assert = require('assert');

// const assert = require('chai').assert;
// const app = require('../app');

// describe('App', function(){
//     it('app should return hello', function(){
//         assert.equal(app(), 'hello');
//     });
// });

const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

//If you have a lot of functions, you can just call the file app instead
const app = require('../app');


//results (commented out the let results, replace results)
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);


describe('App', function(){
    describe('sayHello()', function(){
        it('sayHello should return hello', function(){
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });
        //to check if the thing returned is a string
        it('sayHello should return type string', function(){
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });
   
    describe('addNumbers()',function(){
        //checking for second function
        it('addNumbers should be above 5', function(){
        //let result = app.addNumbers(5,5);
        assert.isAbove(addNumbersResult, 5);
        });
        //checking for number returned
        it('addNumbers should return type number', function(){
        //let result = app.addNumbers(5,5);
        assert.typeOf(addNumbersResult, 'number');
        });
    })
    
});