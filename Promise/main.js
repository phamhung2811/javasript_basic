// var promise = new Promise(
//     function (resolve, reject) {
//         resolve();
//     });


// promise
//     .then(function () {
//         return 1
//     }).then(function (data) {
//         console.log(data);
//         return 2
//     })
//     .then(function (data) {
//         console.log(data);
//         return 3
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function () {
//         console.log('Failed ')
//     })
//     .finally(function () {
//         console.log('Finished')
//     })

// function sleep(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms)
//     })
// }

// sleep(1000)
//     .then(function () {
//         console.log(1)
//         return sleep(1000)
//     }).then(function () {
//         return new Promise(function (resolve,reject){
//             reject('co loi!')
//         })
//     }).then(function () {
//         console.log(3)
//         return sleep(1000)
//     })



var users = [
    {
        id: 1,
        name: 'hùng'
    },
    {
        id: 2,
        name: 'Lĩnh'
    },
    {
        id: 3,
        name: 'Mạnh'
    },
]

var comments = [
    {
        id: 1,
        content: 'đẹp quá trời',
        user_id: 2
    },
    {
        id: 2,
        content: 'hello',
        user_id: 1
    }
]



function getComment() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(comments)
        }, 1000)
    })
}
function getUserIds(userIds) {
    return new Promise(function (resolve, reject) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id)
        })
        setTimeout(function () {
            resolve(result)
        }, 10)
    })

}
getComment()
    .then(  async(comments)=> {
        var users_id = comments.map(function (comment) {
            return comment.user_id
        })
        return getUserIds(users_id)
            .then(function (users) {
                return {
                    users: users,
                    comments : comments
                }; v
            })
    }).then(function (data) {
        var commentBlock=document.querySelector('.comment-block')
        var html=''
        data.comments.forEach(function (comment) {
            var user =data.users.find(function(user){
                return user.id === comment.user_id
            })
            html += `<li>${user.name} : ${comment.content}</li>`
        });
        commentBlock.innerHTML=html
    });



  