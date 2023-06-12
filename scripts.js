// Get the elements
const counter = document.querySelector('.custom-badge');
const plusButton = document.querySelector('.buttons-wrapper sl-button:nth-child(2)');
const minusButton = document.querySelector('.buttons-wrapper sl-button:nth-child(1)');
const resetButton = document.querySelector('sl-button[variant="neutral"]');

// Set the initial counter value
let count = 0;
counter.textContent = count;

// Add event listeners
plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);

// Functions
function incrementCounter() {
  count++;
  counter.textContent = count;
}

function decrementCounter() {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
}

function resetCounter() {
  count = 0;
  counter.textContent = count;
  alert('The counter has been reset.');
}
