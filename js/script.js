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

    const selectedDate = document.querySelector('.booking-form input[name="datebook"]').value;
    const selectTime = document.querySelector('.booking-form input[name="timebook"]').value;
    const selectedPackage = document.querySelector('.booking-form select[name="package"]').value;
    const bookingCards = document.querySelector('.booking-card');

    let pacakgeType
    if (selectedPackage == "lektion") {
       pacakgeType = "Lektion"
    } else if (selectedPackage == "handledar") {
       pacakgeType = "Handledar kurs"

    } else if (selectedPackage == "risk") {
       pacakgeType = "Risk 1 & Risk 2"
    }
    bookingCards.style.display = "flex";

    bookingInfoElement.textContent = `${selectedDate} - ${selectTime} - ${pacakgeType}`;

  }, 2000); 

});
