
setInterval(
    function(){
        console.log('Minęła sekunda')
    },
    1000
)

var globalVariable = 'GLOBAL'

// function declaration
function add(a, b) {
    var someVariable = 123
    console.log(globalVariable)
    return a + b
}

// function expression
var add2 = function add(a, b) {
    var someVariable = 123
    console.log(globalVariable)
    return a + b
}

//assing function to nother variable
var add3 = add2

var result = add3(3, 5)

console.log(result)