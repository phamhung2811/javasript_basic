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
}

var author1=new User('phạm','hùng','hihi')
var author2=new User('phạm','Lĩnh','hehe');
console.log(author1);