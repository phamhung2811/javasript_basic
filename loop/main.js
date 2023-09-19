//For loop
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }


// var myArr = [
//     'php',
//     'javascript',
//     'angular',
//     'python',
// ]
// for (var i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// //for in
// var myInfo = {
//     name: 'hùng',
//     address: 'thái bình',
//     age: 20
// }
// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// //for of
// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }
// // while
// var i = 0
// while (i <= 10) {
//     i++
//     console.log(i);
// }
// // do while
// var i = 0
// do {
//     i++
//     console.log(i)
// } while (i < 10)

// for (var i = 0; i < 10; i++) {
//     if (i % 2 !== 0) {
//         continue
//         // break
//     }
//     console.log(i);
//     // if (i >= 5) {
//     //     break
//     // }

   
// }


// // nester loop
// var arr=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// for(var i=0; i < arr.length; i++) {
//     for (var j=0;j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// đệ quy

//xác điịnh điểm dừng
//logic handle => tạo ra điểm dừng
// function deQuy(){
//     if(num<0){
//         return ;
//     }
//     deQuy();
// }
// deQuy();

function countDown(num){
    if(num>=0){
        console.log(num)
        return countDown(num-1);
    }
    return num;
}
countDown(10)