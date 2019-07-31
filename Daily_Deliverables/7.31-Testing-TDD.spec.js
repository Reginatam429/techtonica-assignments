// Check for Understanding
// Form small groups and discuss:

// What is an automated test?
// What is TDD?
// What are some advantages of TDD?
// What are some disadvantages of TDD?
// Where should your tests live in your project?
// How do you run your tests?

//Ping Pong Pairing 

describe("calculator()", function(){
    it("should be defined", function(){
        expect(calculator.toBeDefined());
        expect(calculator(1,2).toBe(3));
    });

    it("should only take two valid inputs", function() {
        expect(calculator(1, 2, 3).toThrow(new Error("Only two numbers as parameters please")))
    });

    it("should only take two valid inputs", function() {
        expect(calculator(1, "asdf").toThrow(new Error("Only two numbers as parameters please")))
    });

    it("should only take two valid inputs", function() {
        expect(calculator("asdf", 2).equal(jasmine.any(Number)))
    });
})

function calculator(num1,num2){
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1+num2;
    }

}
