console.log('Hello Rafał!')

// data types in JS


// primitives
//string
var textVariable = "Rafał"
console.log(textVariable)

// number
var numberVariable = 43
console.log(numberVariable)

// boolean
var boolVariable = true
console.log(boolVariable)

// null
var nullVariable = null
console.log(nullVariable)

// undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

// objects with data

var simplestObj = {
    name: 'Rafał',
    lastname: 'Bedynek'
}
console.log(simplestObj)

// nested objects with data

var nestedObj = {
    name: 'Rafał',
    car: {
        brand: 'Renaul',
        model: 407
    }
}
console.log(nestedObj)
console.log(nestedObj.car.model)
console.log(nestedObj.car.year)

// arrays
var simpleArray = [
    1,
    {name: 'Ala', array:[1,4,6]},
    3,
    4,
    5,
]
console.log(simpleArray)
console.log(simpleArray[4])
console.log(simpleArray[1].name)
console.log(simpleArray[1].['name'])