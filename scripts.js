// Selects elements
const counter = document.querySelector('.custom-badge');
const plusButton = document.querySelector('.buttons-wrapper sl-button:nth-child(2)');
const minusButton = document.querySelector('.buttons-wrapper sl-button:nth-child(1)');
const resetButton = document.querySelector('sl-button[variant="neutral"]');

// Set the initial counter value
let count = 0;
counter.textContent = count;

// Adds event listeners to each button
plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);

// Button functions
function incrementCounter() {
  count++; // shorthand notation for 'count = count + 1'
  counter.textContent = count;
}

function decrementCounter() {
  if (count > 0) { // only decrements if count is more than 0 (therefore if it's 1 or more)
    count--;
    counter.textContent = count;
  }
}

function resetCounter() {
  count = 0;
  counter.textContent = count;
  alert('The counter has been reset.'); // displays confirmation message that counter has been reset
}
