// const courseName='javascript'
// const description='Course name:'+courseName
// console.log(description);

// //Arrow function

// function loggewr(log){
//     console.log(log)
// }
// loggewr('hello')

// const logger=(log)=>{
//     console.log(log)
//  }
// logger('hello')

// // class
// class course{
//     constructor(name, description){
//         this.name = name
//         this.description = description
//     }
// }
// const jsCourse = new course('js','quá hay')
// console.log(jsCourse)


// //Default parameter value
// function he(log='gia tri măc dinh'){
//     // if(typeof log ==='undefined'){
        
//     // }
//     console.log(log)
// }
// he('helllooooooo')

//spread
var array1=['javascript','ruby'];
var array2=['react','Dart'];
var array3=[...array2,...array1];

console.log(array3)
var object1={
    name:'hello'
}
var object2={
    price:1000
}
var object3={
    ...object1,
    ...object2
}

  