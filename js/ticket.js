document.getElementById('buy-ticket').addEventListener('click', function () {
  document.getElementById('e-ticket').scrollIntoView({ behavior: 'smooth' });
});


let countLeft = 40;
let seatCount = 0;
let priceCount = 0;

function li(seatName, seatPrice) {
  let ul = document.getElementById('seatSelected');
  let li = document.createElement('li');
  li.style.display = 'flex';
  li.style.justifyContent = 'space-between';
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  p1.innerText = seatName.innerText;
  p2.innerText = 'Economy';
  p3.innerText = seatPrice;

  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(p3);
  ul.appendChild(li);
}
const checkSeat = [];
const allBtn = document.getElementsByClassName('kbd');
const applyBtn = document.getElementById('applyBtn');
applyBtn.disabled = true;

for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    checkSeat.push(btn.innerText);
    btn.style.color = 'white';
    btn.disabled = true;
    if (checkSeat.length <= 4) {
      seatCount = seatCount + 1;
      document.getElementById('seatCount').innerText = seatCount;
      countLeft = countLeft - 1;
      document.getElementById('seatsLeft').innerText = countLeft;

      const selectedBtn = document.getElementsByClassName('kbd');
      e.target.style.backgroundColor = '#1DD100';

      let price = document.getElementById('ticketPrice').innerText;
      li(btn, price);
      priceCount = priceCount + parseInt(price);

      document.getElementById('totalPrice').innerText = priceCount;
      document.getElementById('grandTotal').innerText = priceCount;
    } else {
      alert("You can't select more than 4 seats");
    }
    if (priceCount >= 2200) {
      applyBtn.disabled = false;
    }
  });
}

function applyCoupon() {
  let inputField = document.getElementById('inputField').value;
  let new15 = document.getElementById('new15').innerText;
  let couple20 = document.getElementById('couple20').innerText;
  let difference = 0;

  if (seatCount === 4) {
    if (priceCount === 2200) {
      if (inputField === new15) {
        difference = priceCount * 0.15;
        document.getElementById('grandTotal').innerText = parseInt(
          priceCount - difference
        );
        document.getElementById('couponSection').classList.add('hidden');
      } else if (inputField === couple20) {
        difference = priceCount * 0.2;
        document.getElementById('grandTotal').innerText = parseInt(
          priceCount - difference
        );
        document.getElementById('couponSection').classList.add('hidden');
      } else {
        alert('Please enter a valid coupon code');
      }
    } else {
      alert('Please select seats with a total price of 2200');
    }
  } else {
    alert('Please select 4 seats');
  }
}


document.getElementById('phoneNumber').addEventListener('input', function () {
  var phoneNumber = document.getElementById('phoneNumber').value;
  var nextBtn = document.getElementById('nextBtn');

  if (phoneNumber.length >= 4) {
    nextBtn.removeAttribute('disabled');
  } else {
    nextBtn.setAttribute('disabled', 'disabled');
  }
});

document.getElementById('continueBtn').addEventListener('click', function () {
  document.getElementById('my_modal_1').classList.add('hidden');
});