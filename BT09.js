let a = prompt("Nhập số thứ nhất: ");
let b = prompt("Nhập số thứ hai: ");
let c = prompt("Nhập số thứ ba: ");

if (a > b) {
  [a, b] = [b, a];
}

if (a > c) {
  [a, c] = [c, a];
}

if (b > c) {
  [b, c] = [c, b];
}

console.log(`Các số theo thứ tự tăng dần là: ${a}, ${b}, ${c}.`);