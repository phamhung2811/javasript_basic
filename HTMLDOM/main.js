var headingNode = document.getElementsByClassName('h1')
console.log({ element: headingNode })


var boxNode = document.querySelector('.box-1')
//công việc 1:sử dụng tới boxNode
console.log(boxNode)
// Công việc số 2 :sử dụng tới các li elements là con của box-1
console.log(boxNode.querySelectorAll('li'));

var headingElement = document.querySelectorAll('h1')
// headingElement.setAttribute('href', 'heading');

// console.log(headingElement.getAttribute('class'))
// console.log(headingElement.textContent)
// console.log(headingElement.innerText = 'new heading')


var boxElement = document.querySelector('.box-2')
// boxElement.style.width='200px'
// boxElement.style.height='100px'
// boxElement.style.backgroundColor='red'

boxElement.classList.add('red')
console.log(boxElement.classList.contains('green'))

setInterval(function () {
  boxElement.classList.toggle('red')
}, 10)
console.log(headingElement)

for (var i = 0; i < headingElement.length; i++) {
  headingElement[i].onclick = function (e) {
    console.log(e.target)
  }
}
var inputValue;
var input = document.querySelector('.input')
input.onkeydown = function (e) {
  console.log(e.target.value)
}

var aElement = document.querySelectorAll('a');


for (var i = 0; i < aElement.length; i++) {
  aElement[i].onclick = function (e) {
    if (!e.target.href.startsWith('https://fullstack.edu.vn/learning/javascript-co-ban?id=6dd78909-0225-4d57-bee7-20bec5d89773')) {
      e.preventDefault();
    }
  }
}
var ulElement = document.querySelector('ul')

ulElement.onmousedown=function(e){
  e.preventDefault();
}


ulElement.onclick = 
  function(e) {
  console.log(e.target)
}