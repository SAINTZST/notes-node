var square = x => x * x

console.log(square(5))

var user = {
    name: 'Saint',
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi. I'm ${user.name}`)
    },
    sayHiAlt() {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`)
    }
}

user.sayHiAlt(1, 2, 3)