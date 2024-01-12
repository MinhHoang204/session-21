// Cả hai câu lệnh điều kiện if/else và switch/case đều được sử dụng để kiểm tra điều kiện và thực hiện các hành động khác nhau dựa trên kết quả kiểm tra. Tuy nhiên, chúng có những điểm khác nhau về cú pháp, tác dụng và hiệu suất.
// Cú pháp của if/else như sau:
if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
// Cú pháp của switch/case như sau:
switch (expression) {
    case value1:
      // code to be executed if expression matches value1
      break;
    case value2:
      // code to be executed if expression matches value2
      break;
    ...
    default:
      // code to be executed if expression doesn't match any of the above cases
}
// Ví dụ về if/else:
let age = 18;

if (age < 18) {
  console.log("Bạn chưa đủ tuổi để lái xe.");
} else {
  console.log("Bạn đã đủ tuổi để lái xe.");
}
// Ví dụ về switch/case:
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Hôm nay là thứ Hai.");
    break;
  case "Tuesday":
    console.log("Hôm nay là thứ Ba.");
    break;
  case "Wednesday":
    console.log("Hôm nay là thứ Tư.");
    break;
  case "Thursday":
    console.log("Hôm nay là thứ Năm.");
    break;
  case "Friday":
    console.log("Hôm nay là thứ Sáu.");
    break;
  case "Saturday":
    console.log("Hôm nay là thứ Bảy.");
    break;
  case "Sunday":
    console.log("Hôm nay là Chủ Nhật.");
    break;
  default:
    console.log("Không phải ngày trong tuần.");
}