export function dayRate(ratePerHour) {
  return 8 * ratePerHour
}

export function daysInBudget(budget, ratePerHour) {
  return Math.floor((budget / ratePerHour) / 8)
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  return Math.ceil((ratePerHour * 8 * (numDays - (numDays % 22)) * (1 - discount)) + (ratePerHour * 8 * (numDays % 22)))
}