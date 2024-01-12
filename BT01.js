let year = prompt("Bạn sinh năm bao nhiêu");
if(0 < year < 2024){
    let age = 2024 - year;
    console.log(age);
} else {
    console.log("Giá trị không hợp lệ");
}