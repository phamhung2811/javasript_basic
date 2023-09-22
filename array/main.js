var languages = [
    'javascript',
    'angularjs',
    'php',
    'angular'
];
var objects = {
    languages: ['javascript',
        'angularjs',
        'php',
        'angular'
    ],
    age: [2000
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
var result = joinWithCharacter(number, '-');
console.log(result);
function getLastElement(array) {
    return array.slice(array.length - 1);
}

var number = ['1', '2', '3']
var result = getLastElement(number);
console.log(result)


// 
var courses = [
    {
        id: 1,
        name: 'php',
        coin: 250
    },
    {
        id: 2,
        name: 'js',
        coin: 0
    },
    {
        id: 3,
        name: 'angular',
        coin: 0
    },
    {
        id: 4,
        name: 'html,css',
        coin: 0
    },
    {
        id: 5,
        name: 'js',
        coin: 150
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


var findName = courses.filter(function (courses, index) {
    return courses.name === 'js'
})
console.log(findName)

// array map()

var newCourses = courses.map(function (courses, index) {
    return {
        id: courses.id,
        name: `khóa học: ${courses.name}`,
        coin: courses.coin,
        coinText: `GIÁ: ${courses.coin}`,
        index: index,
        originArray: courses
    };
})

console.log(newCourses)

// reduce()
// var totalCoin=0

// for (var sourse of courses) {
//     totalCoin += sourse.coin
// }
// console.log(totalCoin)

var i = 0
var totalCoin = courses.reduce(function (accumulator, currentValue, currentIndex, originArray) {
    i++;
    var total = accumulator + currentValue.coin
    console.table({
        'lượt chạy': i,
        'biến tích trữ': accumulator,
        'giá khóa học': currentValue.coin,
        'tích trữ đc': total
    })
    console.log(currentValue)
    return total
}, 0)

console.log(totalCoin)

// flat

var depthArray = [1, [2, 3], 4, 5, [6, 7, 8]]
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
    return flatOutput.concat(depthItem)
}, [])
console.log(flatArray)


var topics = [
    {
        topic: 'backend',
        courses: [
            {
                id: 1,
                title: 'php'
            },
            {
                id: 2,
                title: 'nodejs'
            }
        ]
    },
    {
        topic: 'frontend',
        courses: [
            {
                id: 1,
                title: 'react'
            },
            {
                id: 2,
                title: 'html,css'
            }
        ]
    }
]

var newCourses = topics.reduce(function (courses, topic) {
    return courses.concat(topic.courses)
}, [])
console.log(newCourses)
var html = newCourses.map(function (courses) {
    return `
        <div>
            <h2>${courses.id}</h2>
            <p>${courses.title}</p>
        </div>
    `
}).join('')
console.log(html)




var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
    }
];


function calculateRating(watchList) {
    var filmByDirector = watchList.filter((films) => films.Director === 'Christopher Nolan')
    var totalIMDB = filmByDirector.reduce(function (total, imdb) {
        return total + Number(imdb.imdbRating)
        
    }, 0)
    return totalIMDB / filmByDirector.length
}

console.log(calculateRating(watchList))

 
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

var array= arr.reduce(function (obj,item){
     obj[item[0]]=item[1]
     return obj
},{})
console.log(array)

