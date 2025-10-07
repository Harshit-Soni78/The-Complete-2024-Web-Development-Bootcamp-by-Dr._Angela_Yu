import { dbank_backend } from "../../declarations/dbank_backend";

async function updateBalance() {
  const currentAmount = await dbank_backend.checkBalance();
  document.getElementById("value").innerText =
    Math.round(currentAmount * 100) / 100;
}

window.addEventListener("DOMContentLoaded", updateBalance);

