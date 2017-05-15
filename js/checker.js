function checkIt() {
  // Initialize scores
  var stewie = 0;
  var peter = 0;
  var quagmire = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'stewie') {
        stewie++;
      }
      else if (e.value == 'peter') {
        peter++;
      }
      else if (e.value == 'quagmire') {
        quagmire++;
      }
    }

  }

  // Determine result
  var counts = "stewie: " + stewie + ", " +
               "peter: " + peter  + ", " +
               "quagmire: " + quagmire;

  // What is the highest value?
  var max = Math.max(stewie, peter, quagmire);

  // Form a message
  var message;

  if (max == stewie) {
    message = "What the deuce (you're stewie)";
  }
  else if (max == peter) {
    message = "When you poop in your dreams, you poop foreal (you're peter) ";
  }
  else if (max == quagmire) {
    message = "giggity giggity giggity (you're quagmire) ";
  }

  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
