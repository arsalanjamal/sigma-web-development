function nice(name){
console.log("Hey "+name+" you are nice!")
console.log("Hey "+name+" you are good!")
console.log("Hey "+name+" Your Tshirt is nice!")
console.log("Hey "+name+" your course is good too!")
}

nice("harry")
nice("Rohan")
nice("shivam")

function sum(a,b){
    //console.log(a+b)
    return a+b
}
result = sum(1,2)
result = sum(1,2)

console.log("The sum of these numbers is:" , result)


function addition(a,b,c=3){
    // console.log(a+b)
    console.log(a,b,c)
    return a + b + c
}
result1 = addition(4,3)
result2 = addition(5,3)
result3 = addition(6,3)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)
console.log("Hey harry you are nice!")
console.log("Hey harry you are good!")
console.log("Hey harry your tshirt is nice!")
console.log("Hey harry your course is good too!")

const func1 =(x)=> {
    console.log("I am an arrow function" ,x)
}
func1(34);
func1(66);
func1(84);