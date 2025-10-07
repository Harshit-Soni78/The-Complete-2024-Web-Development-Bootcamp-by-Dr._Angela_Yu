import { dbank_backend } from "../../declarations/dbank_backend";

async function updateBalance() {
  const currentAmount = await dbank_backend.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
}

window.addEventListener("DOMContentLoaded", updateBalance);

document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");
  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  if (!isNaN(inputAmount)) {
    await dbank_backend.topUP(inputAmount);
  }

  await updateBalance();
});
