var languages = [
    'javascript',
    'angularjs',
    'php',
    'angular'
];
var objects = {
    languages:['javascript',
        'angularjs',
        'php',
        'angular'
    ],
    age:[2000
    ]
}
// console.log(Array.isArray(languages));
// console.log(languages);
// console.log(objects);

// console.log(languages.toString());

// console.log(languages.join());
// //xóa phân tử cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop());
// console.log(languages.push('Dart'))
// console.log(languages.shift());
// console.log(languages.unshift('javascript'));
// languages.splice(1,1,'angular')
// console.log(languages);


function joinWithCharacter(array, character) {
    return array.join(character);
}
 var number = [
        '1', '2', '3'
    ]
var result = joinWithCharacter(number,'-');
console.log(result);
function getLastElement(array){
    return array.slice(array.length -1);
}

var number =['1','2','3']
var result= getLastElement(number);
console.log(result)


// 
var courses =[
    {
        id:1,
        name:'php',
        coin:250
    },
    {
        id:2,
        name:'js',
        coin:0
    },
    {
        id:3,
        name:'angular',
        coin:0
    },
    {
        id:4,
        name:'html,css',
        coin:0
    },
    {
        id:5,
        name:'js',
        coin:0
    }
]

// courses.forEach(function(courses,index){
//     console.log(index, courses);
// })


// var isFree=courses.every(function(courses,index){
//     return courses.coin===0
// })
// console.log(isFree)



// var isFree=courses.some(function(courses,index){
//     return courses.coin===0
// })
// console.log(isFree)


// var findName=courses.find(function(courses,index){
//     return courses.name==='js'
// })
// console.log(findName)


// var findName=courses.filter(function(courses,index){
//     return courses.name==='js'
// })
// console.log(findName)

// array map()

var newCourses =courses.map(function(courses,index){
    return{
        id:courses.id,
        name:`khóa học: ${courses.name}`,
        coin:courses.coin,
        coinText:`GIÁ: ${courses.coin}`,
        index:index,
        originArray:courses
    };
})

console.log(newCourses)

// reduce()

 