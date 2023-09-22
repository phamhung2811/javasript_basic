var headingNode = document.getElementsByClassName('h1')
console.log({ element: headingNode })


var boxNode= document.querySelector('.box-1')
//công việc 1:sử dụng tới boxNode
console.log(boxNode)
// Công việc số 2 :sử dụng tới các li elements là con của box-1
console.log(boxNode.querySelectorAll('li'));