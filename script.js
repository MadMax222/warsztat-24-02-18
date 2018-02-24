
// function declaration
function hello(name, numerOfLogs){ // paramet is a name 
    
    for(var i = 0; i < numerOfLogs; i++) {
    console.log('Hello ' + name + '!')
    }
}

// function invocation (call)
hello('Rafał', 1) // passing atribute 'Rafał'
hello('Ala', 2)
hello('Ela', 3)
hello({name: 'Stanisława'}, 1)