/**
 * The function formatQuantity takes one argument:
 *  - quantity a number to format
 *
 * It should convert the quantity to a String with a unit suffix
 * that fulfills the test cases in test/spec/quantity.spec.jsx
 */

function containsNumbers(str) {
  return /\d/.test(str);
}

export const formatQuantity = (quantity) => {
  if (!containsNumbers(quantity)) return "";
  if (quantity < 1000 && quantity > -1000)  return quantity.toString()
  if (quantity > 1000 && quantity < 1000000) return quantity/1000+"K"
  if (quantity > -1000000 && quantity < -1000) return quantity/1000+"K"
  if (quantity > 1000000 && quantity < 1000000000) return quantity/1000000+"M"
  if (quantity > -1000000000 && quantity < -1000000) return quantity/1000000+"M"
  if (quantity > 1000000000) return quantity/1000000000+"B"
  if (quantity < -1000000000 ) return quantity/1000000000+"B"
};
