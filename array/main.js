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
console.log(Array.isArray(languages));
console.log(languages);
console.log(objects);

console.log(languages.toString());

console.log(languages.join());
//xóa phân tử cuối mảng và trả về phần tử đã xóa
console.log(languages.pop());
console.log(languages.push('Dart'))
console.log(languages.shift());
console.log(languages.unshift('javascript'));
languages.splice(1,1,'angular')
console.log(languages);


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