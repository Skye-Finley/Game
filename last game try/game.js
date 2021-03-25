function test() {
    console.log('Hello world!');
};
test();
let name = 'Kalani',
    age = 13;

    function getUser(name, age) {
        let welcome = 'Hello, ' + name + '. Why are you ' + age + ' years old??';
        console.log(welcome);
    };
    getUser(name, age);
    
    
    let testName = 'Kalani';
    function conditionalTest(testName) {
        let results;
        // Check if name is equal to ____
        if (testName === 'Khalil') {
            results = "This isn't Chia!";
            console.log(results);
        } else {
            results = "Hello Chia!";
            console.log(results);
        }
    };
    conditionalTest(testName);
    let createArr = Array(7); //quick way of creating a number array

const months = ["January", "February", "March", "April", "May", "June", "July"];

const randomNum = Math.floor(Math.random() * 100); //returns a random number between 0-99

const randomMonthIndex = Math.floor(Math.random() * months.length); //returns a random number that's the length of the array (in this case it's 7)
console.log(randomMonthIndex, months[randomMonthIndex]); //returns the random item in the months array
