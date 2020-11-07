
  const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    }
  };

function getGuess(){
  
}


























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