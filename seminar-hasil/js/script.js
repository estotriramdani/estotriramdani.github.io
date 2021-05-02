const grabTicketButton = document.getElementById('grabTicketButton');
const grabTicketContainer = document.querySelector('.grab-ticket-container');
const preload = document.querySelector('.preload');

const ticket = `${Math.ceil(Math.random() * 9)}${Math.ceil(
  Math.random() * 8
)}${Math.ceil(Math.random() * 7)}${Math.ceil(Math.random() * 6)}${Math.ceil(
  Math.random() * 5
)}`;

grabTicketButton.addEventListener('click', function () {
  grabTicketButton.innerHTML = 'Please wait. Grabbing your ticket ...';
  setTimeout(() => {
    grabTicketContainer.innerHTML = `
    <button class="ticketBox">Your Ticket: ${ticket}</button>
          <button class="enterButton" id="${ticket}" onClick="openLink(this.id)">Enter Now</button>`;
  }, 1200);
});

function openLink(id) {
  const enterButton = document.querySelector('.enterButton');
  enterButton.innerHTML = 'Please Wait...';
  setTimeout(() => {
    Swal.fire({
      title: 'You are going to enter the room',
      text: `Your Ticket ID is ${id}. Make sure you have logged in your IPB Account`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#292f36',
      cancelButtonColor: '#FF6B6B',
      confirmButtonText: 'Enter Room',
    }).then((result) => {
      if (result.isConfirmed) {
        preload.innerHTML = `<div class="preloader">
          <div id="loading"></div>
          <h3>Please wait</h3>
        </div>`;
        setTimeout(() => {
          window.location = 'https://meet.google.com/uqt-ebqy-rhf';
        }, 1700);
      }
    });
    enterButton.innerHTML = 'Enter Now';
  }, 1000);
}
