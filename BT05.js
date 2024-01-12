let month = prompt("Nhập số tháng trong năm");
let years = prompt("Nhập số năm");
if (month == 1,3,5,7,8,10,12){
    console.log("Tháng có 31 ngày");
} else if (month == 4,6,9,11){
    console.log("Tháng có 30 ngày");
} else if (month == 2, year %4 == 0, year %100 !== 0 && year %400 ==0){
    console.log("Tháng 2 có 29 ngày");
} else if (month == 2, year %4 !== 0) {
    console.log("Tháng 2 có 28 ngày");
} else {
    console.log("Số tháng không hợp lệ");
}