const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let total = 0;
for (let price of prices) {
  total += price;
}

prices.reduce((total, element) => {
  console.log(total, element);
  return total + element;
});

const min = prices.reduce((min, price) => {
  if (min < price) {
    return min;
  }
  return price;
});

console.log(min);

const evens = [2, 4, 6, 8];
console.log(evens.reduce((sum, num) => sum + num, 100));
