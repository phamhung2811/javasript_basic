// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postApi)
//     .then(function (response) {
//         return response.json()
//     }).then(function (posts) {
//         var htmls = posts.map(function (post) {
//             return `
//                 <li>
//                     <h2>${post.title}</h2>
//                     <p>${post.body}</p>
//                 </li>
//             `
//         })
//         var html = htmls.join('')
//         document.querySelector('.comment-block').innerHTML = html
//     }).catch(function (error) {
//         console.log(error)
//     })

// var courses = 'http://localhost:3000/posts'

// fetch(courses)
//     .then(function (response) {
//         return response.json()
//     }).then(function (courses) {
//         console.log(courses)
//     })



var coursesApi = ' http://localhost:3000/courses'

function start() {
    getCourses(function (courses) {
        renderCourses(courses)
        
    })
    handleCreateForm()
}
start()

function getCourses(callBack) {
    fetch(coursesApi)
        .then(function (response) {
            return response.json()
        }).then(callBack)
}
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('.list-courses')
    var html = courses.map(function (course) {
        return `
        <li class="courseItem-${course.id}">
            <h2>${course.name}</h2>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourses(${course.id})">xóa</button>
        </li>
        `
    })
    listCoursesBlock.innerHTML = html.join('')
}

function createCourse(data, callBack) {
    fetch(coursesApi, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json()
    }).then(callBack);
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function () {
        var name = document.querySelector('.name')
        var description = document.querySelector('.description')

        var formData = {
            name : name.value,
            description : description.value
        }

        createCourse(formData,function(){
            getCourses(function (courses) {
                renderCourses(courses)
                
            })
        })
    }
}

function handleDeleteCourses(id) {
    fetch(coursesApi+'/'+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", },
    }).then(function (response) {
        return response.json()
    }).then(function(){
        var courseItem=document.querySelector('.courseItem'+id);
        courseItem.remove();
    });
}