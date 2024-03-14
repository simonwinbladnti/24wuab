let navButton = document.querySelector(".burger-menu");
let menuActive = false;

function showMenu() {
    let menu = document.querySelector(".nav-container");
    menu.classList.toggle("active");
}

navButton.addEventListener('click', showMenu);

const submitButton = document.getElementById('submitButton');
const form = document.querySelector('.booking-form');
const bookingInfoElement = document.getElementById('bookingInfo');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const loadingOverlay = document.createElement('div');
  loadingOverlay.classList.add('loading-overlay');
  loadingOverlay.textContent = 'Laddar...';
  document.body.appendChild(loadingOverlay);

  setTimeout(function() {
    document.body.removeChild(loadingOverlay);

    const selectedDate = new Date(); 
    const selectedPackage = document.querySelector('.booking-form select[name="package"]').value;

    bookingInfoElement.textContent = `${selectedDate.toLocaleDateString()} ${selectedDate.toLocaleTimeString()} - ${selectedPackage}`;

  }, 2000); 

});
