function writeLog() {
    // console.log(message);
    var myString='';
    for(var param of arguments) {
        myString+= `${param} - `;
    }
    console.log(myString);
}
writeLog(1,2,3);
function writeLog1() {
    console.log(arguments)
}
writeLog1(1,2,3);


function cong(a,b){
    return a+b
}
var result = cong(1,4);
console.log(result);
setTimeout(1);