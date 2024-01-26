//stack memory and heap memory

//stack(primitive),heap(Non-primitive)


let firstyoutubename="chaiwithcode";

let myyoutubename=firstyoutubename;

myyoutubename="preetiwithcode"
//in stack basically stack doesnot pass the value although it pass the  copy of
//the value so if we change the value still original value does not change.

console.log(myyoutubename);
console.log(firstyoutubename);

//lets take here an advanced datatype

//since this is a non primitive datatype
//so we know non primitive data type stored in heap
//and heap provides reference to the values.

let userone = {

    email:"user@google.com",
    upi:"user@ybl",
 }

let usertwo=userone;

usertwo.upe="user2@pbl";

console.log(usertwo.upe);
console.log(userone.upe);


