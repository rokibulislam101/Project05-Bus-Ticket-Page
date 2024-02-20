let totalPrice = 0;
let grandTotal = 0;
let selectedSeatsCount = 0;

document.querySelectorAll('.kbd').forEach(seat => {
  seat.addEventListener('click', () => {
    if (!seat.classList.contains('selected') && selectedSeatsCount < 4) {
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
      updateTotalPrices();
      selectedSeatsCount++;
    }
  });
});

function updateTotalPrices() {
  document.querySelector(
    '.total-price span'
  ).textContent = `BDT ${totalPrice}:00`;
  document.querySelector(
    '.grand-total span'
  ).textContent = `BDT ${grandTotal}:00`;
}

const apply = document.getElementById('apply-btn');

apply.addEventListener('click', function (e) {
  const couponElement = document.getElementById('coupon').value.toUpperCase();
  const totalTicketPrice = totalPrice;

  if (selectedSeatsCount === 4) {
    if (couponElement === 'NEW15') {
      applyCoupon(0.15, totalTicketPrice);
    } else if (couponElement === 'COUPLE20') {
      applyCoupon(0.2, totalTicketPrice);
    } else {
      alert('Invalid Coupon');
    }
  } else {
    alert('Please select 4 seats');
  }
});

function applyCoupon(discountPercentage, totalTicketPrice) {
  const grandTotalElement = document.getElementById('grand-total');
  const discount = totalTicketPrice * discountPercentage;
  const grandTotal = totalTicketPrice - discount;
  grandTotalElement.innerText = grandTotal.toFixed(2);
  hideElementById('coupon-area');
}

function hideElementById(id) {
  document.getElementById(id).style.display = 'none';
}

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