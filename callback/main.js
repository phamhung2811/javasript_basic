//callback


// function myFunction(param) {
//     if (typeof param === 'function') {
//         param('hoclaptrinh')
//     }

// }
// function myCallback(value) {
//     console.log('value :', value)
// }
// myFunction(myCallback)



// Array.prototype.map2 = function (callback) {
//     var arrayLength = this.length, output = []
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callback(this[i])
//         output.push(result)
//     }
//     return output
// }
// var courses = [
//     'js',
//     'php',
//     'angular'
// ]
// var html = courses.map2(function (course) {
//     // return course
//     return `<h2>${course}</h2>`
// })
// console.log(html.join(''))

// // forEach

// Array.prototype.forEach2=function(callback) {
//     for(var index in this){
//         if(this.hasOwnProperty(index))
//         callback(this[index],index,this)
//     }
// }

// courses.forEach2(function(course,index,array) {
//     console.log(course,index,array)
// })

// // filter
// Array.prototype.filter2 = function (callback) {
//     var output = []
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }
//     return output
// }

// var courses = [
//     {
//         id: 1,
//         name: 'php',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'js',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'angular',
//         coin: 0
//     },
//     {
//         id: 4,
//         name: 'html,css',
//         coin: 0
//     },
//     {
//         id: 5,
//         name: 'js',
//         coin: 150
//     }
// ]

// var filterCourses=courses.filter2(function (course,index,array) {
//    return course.coin>0
// })

//some 
// Array.prototype.some2=function(callback){
//     for(var index in this){
//         if(this.hasOwnProperty(index)){
//             if(callback(this[index],index,this)){
//                 return true;
//             }
//         }    
//     }
//     return false
// }
Array.prototype.some2 = function(cb) {
    var arrlength = this.length;
    for(var i = 0; i < arrlength; i++) {
        if(cb(this[i], i, this)) {
            return true;
            break;
        }
    }
    return false
}
var courses=[
    {
        name:'js',
        coin: 250,
        isFinish:true
    },
    {
        name:'php',
        coin: 250,
        isFinish:true
    },
    {
        name:'ruby',
        coin: 250,
        isFinish:false
    }
]

var result=courses.some2(function (course,index,array) {
    return course.isFinish==true
    
})
console.log(result)


//every
Array.prototype.every2=function(cb){
    for(index in this){
        if(this.hasOwnProperty(index)){
            var result=cb(this[index],index,this)
            if(!result){
                return false
            }
        }
    }
    return true
}


var result=courses.every2(function (course,index,array) {
    return course.coin<600
    
})
console.log(result) 