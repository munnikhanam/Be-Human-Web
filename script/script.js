const addDonationBtn = document.getElementById("add-donation-btn");
addDonationBtn.addEventListener("click", function () {
  const inputAmount = document.getElementById("donation-input");
  const donationInput = parseInt(inputAmount.value);

  const currentAmount = parseInt(
    document.getElementById("donate-tk").innerText
  );
  const newAmount = donationInput + currentAmount;

  document.getElementById("donate-tk").innerText = newAmount;
  const totalDonation = parseInt(
    document.getElementById("total-donation").innerText
  );
  const newDonation = totalDonation + newAmount;
  document.getElementById("total-donation").innerText = newDonation;
  // Validate input
  if (isNaN(donationInput) || donationInput <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  inputAmount.value = "";
});
// history part
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-[#B4F461]");

  donationBtn.classList.remove("bg-[#B4F461]");
  const mainCard = document.getElementById("card-part");
  mainCard.classList.add("hidden");
});
donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("bg-[#B4F461]");

  historyBtn.classList.remove("bg-[#B4F461]");
  const mainCard = document.getElementById("card-part");
  mainCard.classList.remove("hidden");
});
