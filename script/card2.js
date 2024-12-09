getInnertextFieldById("quota-protest-donation-btn").addEventListener(
  "click",
  function () {
    // if (isNaN(quotaProtestInputValue) || quotaProtestInputValue <= 0) {
    //   alert("Please enter a valid donation amount.");
    //   return;
    // }
    const quotaProtestInput = getInnertextFieldById("quota-protest-input");
    const quotaProtestInputValue = parseFloat(quotaProtestInput.value);
    const quotaDonateTk = getInnertextFieldById("quota-donate-tk");
    const quotaDonateTotal = parseFloat(quotaDonateTk.innerText);
    const totalDonationAmount = quotaProtestInputValue + quotaDonateTotal;
    getInnertextFieldById("quota-donate-tk").innerText = totalDonationAmount;
    const totalDonation = parseInt(
      getInnertextFieldById("total-donation").innerText
    );
    const newQuotaDonation = totalDonation + totalDonationAmount;
    getInnertextFieldById("total-donation").innerText = newQuotaDonation;
    quotaProtestInput.value = "";
    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-center items-center bg-white";
    historyItem.innerHTML = `
     <div class="modal-box">
    <h1>Quota-protest</h1>
          <p class="py-4">${newQuotaDonation} taka is donated for the treatment of wounded people at quota protest in Dhaka , Bangladesh</p>
        </div>
    
    `;
    const quotaHistory = document.getElementById("quota-history");
    quotaHistory.appendChild(historyItem);
  }
);
