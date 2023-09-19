var emailKey='email'
var myInfo={
    name:'Phạm Hùng',
    age:20,
    address:'Thái Bình',
    [emailKey]:'hungpvph25702@gmail.com',
    getName:function(){
        return this.name;
    }
}
// var myKey='address'
myInfo.email='hungpv2811@gmail.com'
console.log(myInfo.getName());

//object constructor

function User(firstName, lastName,avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() { 
        return `${this.firstName} ${this.lastName}`
    }
}
// Object prototype - Basic
User.prototype.className='h8';
User.prototype.getclassName = function() {
    return this.className
}
var author1=new User('phạm','hùng','hihi')

var author2=new User('phạm','Lĩnh','hehe');
author1.title='chia sẻ'
author2.comments='hello'
console.log(author1);
console.log(author2.getclassName());

// console.log(author2.constructor === User);


//đối tượng date

var date=new Date();
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();
console.log(date.getFullYear(), date.getMonth()+1, date.getDate());
console.log(date)
console.log(`${day}/${month}/${year}`)

