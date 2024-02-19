let totalPrice = 0;
let grandTotal = 0;

document.querySelectorAll('.kbd').forEach(seat => {
  seat.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.selected');
    if (!seat.classList.contains('selected') && selectedSeats.length < 4) {
      seat.classList.add('selected');
      seat.style.backgroundColor = '#1DD100';
      seat.style.color = 'white';
      let seatInfo = document.createElement('div');
      seatInfo.style.display = 'flex';
      seatInfo.style.justifyContent = 'space-between';
      seatInfo.innerHTML = `<p>${seat.textContent}</p><p>Economy</p><p>550</p>`;
      document.querySelector('.selected-seats').appendChild(seatInfo);
      totalPrice += 550;
      grandTotal += 550;
      document.querySelector(
        '.total-price span'
      ).textContent = `BDT ${totalPrice}:00`;
      document.querySelector(
        '.grand-total span'
      ).textContent = `BDT ${grandTotal}:00`;
    }
  });
});


// // Coupon Code Section
const apply = document.getElementById('apply-btn');

apply.addEventListener('click', function (e) {
  const couponElement = document.getElementById('coupon').value;
  const totalTicketPrice = document.getElementById('total-price').innerText;
  const totalTicketPriceNumber = parseInt(totalTicketPrice);

  if (totalPrice === 2200) {
    if (couponElement === 'NEW15') {
      const grandTotalElement = document.getElementById('grand-total');
      const discount = totalTicketPriceNumber * 0.15;
      const grandTotal = totalTicketPriceNumber - discount;
      grandTotalElement.innerText = `BDT ${grandTotal}:00`;
      hideElementById('coupon-area');
    } else if (couponElement === 'Couple20') {
      const grandTotalElement = document.getElementById('grand-total');
      const discount = totalTicketPriceNumber * 0.2;
      const grandTotal = totalTicketPriceNumber - discount;
      grandTotalElement.innerText = `BDT ${grandTotal}:00`;
      hideElementById('coupon-area');
    } else {
      alert('Invalid Coupon');
    }
  } else {
    alert('Please select 4 seats');
  }
});


// // Seat Count and Left
let count = 0;
let countLess = 40;

const allBtn = document.getElementsByClassName('kbd');

for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    if (count < 4 && countLess > 36) {
      count = count + 1;
      countLess = countLess - 1;
      document.getElementById('seat-P').innerText = count;
      document.getElementById('seat-L').innerText = countLess;
    }
  });
}

// Get the modal element open and close
const modal = document.getElementById('my_modal_1');

const openButton = document.querySelector('[onclick="my_modal_1.showModal()"]');

const continueButton = modal.querySelector('button');

continueButton.addEventListener('click', () => {
  modal.close();
});

openButton.addEventListener('click', () => {
  modal.showModal();
});
