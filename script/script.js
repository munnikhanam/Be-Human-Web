const addDonationBtn = getInnertextFieldById("add-donation-btn");
addDonationBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);

  const inputAmount = document.getElementById("donation-input");
  const donationInput = parseInt(inputAmount.value);

  const currentAmount = parseInt(getInnertextFieldById("donate-tk").innerText);
  const newAmount = donationInput + currentAmount;

  getInnertextFieldById("donate-tk").innerText = newAmount;
  const totalDonation = parseInt(
    getInnertextFieldById("total-donation").innerText
  );
  const newDonation = totalDonation + newAmount;
  document.getElementById("total-donation").innerText = newDonation;
  // Validate input
  if (isNaN(donationInput) || donationInput <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }

  inputAmount.value = "";
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
  const historyCard = document.getElementById("history-part");
  historyCard.innerHTML = `
  <div class="modal-box">
    <h1>Noyakhali</h1>
          <p class="py-4">${newDonation} taka is donated for food relif in Noyakhali, Bangladesh</p>
        </div>
 `;
  historyCard.classList.add("hidden");
});
// history part
const historyBtn = getInnertextFieldById("history-btn");
const donationBtn = getInnertextFieldById("donation-btn");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("bg-[#B4F461]");

  donationBtn.classList.remove("bg-[#B4F461]");
  const mainCard = getInnertextFieldById("card-part");
  mainCard.classList.add("hidden");
  const historyCard = document.getElementById("history-part");
  historyCard.classList.remove("hidden");
});
donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("bg-[#B4F461]");

  historyBtn.classList.remove("bg-[#B4F461]");
  const mainCard = getInnertextFieldById("card-part");
  mainCard.classList.remove("hidden");
});
