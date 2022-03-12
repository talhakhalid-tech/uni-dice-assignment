// Fig. 10.10: RollDice.js
// Summarizing die-rolling frequencies with an array instead of a switch
var frequency = [0, 0, 0, 0, 0, 0]; // frequency[0] uninitialized
var totalDice = 0;
var dieImages = new Array(12); // array to store img elements

// get die img elements
function start() {
  var button = document.getElementById('rollButton');
  button.addEventListener('click', rollDice, false);
  var length = dieImages.length; // get array's length once before loop

  for (var i = 0; i < length; ++i) {
    dieImages[i] = document.getElementById('die' + (i + 1));
  } // end for
} // end function start

// roll the dice
function rollDice() {
  var face; // face rolled
  var length = dieImages.length;

  for (var i = 0; i < length; ++i) {
    face = Math.floor(1 + Math.random() * 6);
    tallyRolls(face - 1); // increment a frequency counter
    setImage(i, face); // display appropriate die image
    ++totalDice; // increment total
  } // end for

  updateFrequencyTable();
} // end function rollDice

// increment appropriate frequency counter
function tallyRolls(face) {
  ++frequency[face]; // increment appropriate counte
} // end function tallyRolls

// set image source for a die
function setImage(dieImg, face) {
  dieImages[dieImg].style.backgroundImage = 'url("dice_' + face + '.jpg")';
} // end function setImage

// update frequency table in the page
function updateFrequencyTable() {
  var results =
    '<table><caption>Die Rolling Frequencies</caption>' +
    '<thead><th>Face</th><th>Frequency</th>' +
    '<th>Percent</th></thead><tbody>';
  var length = frequency.length;

  // create table rows for frequencies
  for (var i = 0; i < length; i++) {
    results +=
      '<tr><td>' +
      (i + 1) +
      '</td><td>' +
      frequency[i] +
      '</td><td>' +
      formatPercent(frequency[i] / totalDice) +
      '</td></tr>';
  } // end for

  results += '</tbody></table>';
  document.getElementById('frequencyTableDiv').innerHTML = results;
} // end function updateFrequencyTable

// format percentage
function formatPercent(value) {
  value *= 100;
  return value.toFixed(2);
} // end function formatPercent

window.addEventListener('load', start, false);
