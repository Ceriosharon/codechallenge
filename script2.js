const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector(speed) {
    const speedLimit = 70;
    const pointsPerOverSpeed = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        let points = Math.floor((speed - speedLimit) / pointsPerOverSpeed);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`; 
        }
    }
}

rl.question("Enter the speed of the car: ", (input) => {
    let speed = parseInt(input);

    if (isNaN(speed)) {
        console.log("Please enter a valid number for speed.");
    } else {
        let result = speedDetector(speed);
        console.log(result);
    }
    
    rl.close();
});
