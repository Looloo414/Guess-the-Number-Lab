
const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum; // random num 1=100

  let input = NaN
  while(this.secretNum != input) {
      input = this.getGuess();
     this.prevGuesses.push(input);
      this.render(input);
      if (input === this.secretNum)
      return;
  } 
  },
  getGuess: function(){  // check back guess === NaN
      let input = NaN
  while(isNaN(input)|| input < this.smallestNum || input > this.biggestNum){
         input = parseInt(prompt( `Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
  } return input;

  },

  render: function(input){ // passed in guess argument
     let result = (input === this.secretNum) ? alert(` Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)  
       : input < this.secretNum ? alert(`${input} was too low  Previous guesses:${this.prevGuesses.join(', ')}`) 
       : input > this.secretNum ? alert(`${input} was too high  Previous guesses:${this.prevGuesses.join(', ')}`)
       : 
       alert(result)
  }
}
game.play();
























//   function getGuess(){
//     game.play();
//     let num= this.secretNum;
//     let input = 1;
//     console.log(`Enter a guess between ${input},secret number: ${num}`);
//     return compGuess(input, num);
//   }
// function compGuess(input, num){
//     while(input != num){
//         if(input < num){
//             console.log(`${input} was too low`);
//         }
//         else if(input > num){
//             console.log(`${input} was too high`);
//         }
//         console.log(num);
//         return input;
//     };
// };
// console.log(`${getGuess()} was not correct!`);