const bill = Number(prompt("Enter bill amount"));
const tip = Number(prompt("Enter your tip"));
const tip_to_offer = bill * (tip / 100);
const total_to_pay = tip_to_offer + bill;
console.log(total_to_pay)