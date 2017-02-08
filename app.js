function guessingGame()
{
  // This is the username prompt for the guessing game //
  var userName = prompt('What\'s your name?')
  alert('Hello ' + userName + '. Thanks for coming to my site!');
  //This is the question correct/incorrect counter//
  var questionCounter = 0;
  //This is the first question//
  function questionOne() {
    var myAnswersOne = ['Y', 'YES'];
    var answerOne = prompt('Can I read and write?').toUpperCase();
    if (myAnswersOne.indexOf(answerOne) > -1) {alert('Too easy -- yes!');
    questionCounter++
  }
  //Question counter firing correctly//
  else {alert('No, but that\'s very funny of you!!')
}
console.log('Question ONE fired -- current score is ' + questionCounter);
}
questionOne()
//This is the second question//
function questionTwo() {
  var myAnswersTwo = ['Y', 'YES'];
  var answerTwo = prompt('Can I eat six saltine crackers in a minute or less?').toUpperCase();
  if (myAnswersTwo.indexOf(answerTwo) > -1) {alert('Well played!');
  questionCounter++
}
//Question counter firing correctly//
else {alert('Incorrect!')
}
console.log('Question TWO fired -- current score is ' + questionCounter);
}
questionTwo()
//This is the third question//
function questionThree() {
  var myAnswersThree = ['N', 'NO'];
  var answerThree = prompt('Am I colorblind?').toUpperCase();
  if (myAnswersThree.indexOf(answerThree) > -1) {alert('Correctamundo!');
  questionCounter++
}
//Question counter firing correctly//
else {alert('Wrongo!')}
console.log('Question THREE fired -- current score is ' + questionCounter);
}
questionThree()
//This is the fourth question//
function questionFour() {
  var myAnswersFour = ['Y', 'YES'];
  var answerFour = prompt('Did I go to university?').toUpperCase();
  if (myAnswersFour.indexOf(answerFour) > -1) {alert('Correct -- go Vikings!');
  questionCounter++
}
//Question counter firing correctly//
else {alert('Gutterball!')
}
console.log('Question FOUR fired -- current score is ' + questionCounter);
}
questionFour()
//This is the fifth question//
function questionFive() {
  var myAnswersFive = ['Y', 'YES'];
  var answerFive = prompt('Am I old enough to remember the \'95 Mariners season?').toUpperCase();
  if (myAnswersFive.indexOf(answerFive) > -1) {alert('Well played!');
  questionCounter++
}
//Question counter firing correctly//
else {alert('Nope!')
}
console.log('Question FIVE fired -- current score is ' + questionCounter);
}
questionFive()
//This is the sixth question using a logical operator and counter//
function questionSix() {
  var myAge = 29;
  var counterSix = 0;
  while (counterSix < 4) {
    counterSix++;
    var answerSix = parseInt(prompt('What\s my age?'));
    if (counterSix === 4) {
      alert('Let\'s move on');
    } else if (answerSix === myAge) {
      alert ('Got it like the \'79 SuperSonics!');
      questionCounter++;
      break;
    } else if (answerSix < myAge) {
      alert ('Too young!')
    } else if (answerSix > myAge) {
      alert('Too old!'); counterSix++
      //Question counter firing correctly//
    }
  }
}
questionSix()
// This is the seventh question using an array and indexOf feature//
function questionSeven() {
  var placesIHaveLived = ['SEATTLE', 'BELLINGHAM', 'WASHINGTON DC', 'WASHINGTON D.C.', 'Redmond'];
  var counterSeven = 0;
  while (counterSeven < 6) {
    counterSeven++;
    var answerSeven = prompt('Name a place I have lived.').toUpperCase();
    if (counterSeven === 6) {alert('Don\'t cry, Mac -- you lost!')
  }
  else if (placesIHaveLived.indexOf(answerSeven) === -1) {
    alert('Incorrect!')
  }
  else if (placesIHaveLived.indexOf(answerSeven) > -1) {
    alert('It is truth!');
    questionCounter++;
    //Question counter firing correctly//
    break;
  }
}
console.log('Question SEVEN fired; questions complete! Current score is ' + questionCounter);
}
questionSeven()
{alert('Congratulations! You got ' + questionCounter + ' out of 7 questions correct')}
}
