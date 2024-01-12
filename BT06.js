let toan = prompt("Nhập điểm môn toán");
let van = prompt("Nhập điểm môn văn");
let anh = prompt("Nhập điểm môn anh");

console.log(diemTB=(toan + van + anh)/3);

if(diemTB >= 8.0 && diemTB <= 10){
    console.log("Xếp loại giỏi");
} else if (diemTB >= 6.5 && diemTB <= 7.9){
    console.log("Xếp loại khá");
} else if (diemTB >= 5.0 && diemTB <= 6.4){
    console.log("Xếp loại trung bình");
} else if (diemTB <= 5.0){
    console.log("Xếp loại yếu");
} else {
    console.log("Diểm trung bình không hợp lệ");
}