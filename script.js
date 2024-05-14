var age = 20
age = 65

var username = "adelyn"
var password = "techup"

var is_female = false
var is_logged_in = false

var blog_post = ["Today was a sunny day, " + "The sky is blue, " + "Today is a good day!"]

console.log(age)

console.log(username)
console.log(password)
console.log(is_female)
console.log(is_logged_in)
console.log(blog_post)

// conditionals using if and else

if (is_female == true) {
    console.log("You are a female!")
}

if (is_female == true) {
    console.log("You are a female!")
} else {
    console.log("You are not a female!")
}

// conditionals using while loop

while (age < 70) {
    console.log("Your age is " + age)
    age = age + 1
}

// adding functions 
function Hello() {
    alert("Hello Everyone!")
    var user_name = prompt("What's your name?")
    alert("Hello " + user_name + ", it's very nice to meet you!")
}


