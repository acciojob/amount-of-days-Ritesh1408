//your JS code here. If required.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", (num) => {
  num = Number(num); 
	function daysOfAYear(num) {
		if(num % 4 === 0 && num % 100 !== 0 || num % 400 === 0){
			return 366;
		}else{
			return 365
		}
	}
  // console.log("You entered:", num);
  rl.close();
});
