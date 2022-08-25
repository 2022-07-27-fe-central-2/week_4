// synchronous callback function

// 1. create a callback function that returns a name

const nameGetter = () => 'George Washington'

// 2. create a higher order function, that accepts a callback function as its argument, log a greeting with the result from the callback function

const greeterFunction = (callback) => {
  const name = callback()
  console.log(`Hi ${name}, nice to meet you!`)
}

greeterFunction(nameGetter)

// asynchronous callback function

// 1. setTimeout introduction
// setTimeout syntax looks like this: setTimeout(code, delay)
// delay is in ms

const apiResult = () => {
  console.log('Apple', 'Banana', 'Cantaloupe')
}

const fetchFromFruitsApi = () => {
  setTimeout(apiResult, 5000)
}

fetchFromFruitsApi()


const greeting = () => console.log('Hi Martha Washington!')

setTimeout(greeting, 2000)

// 1. use one of the most common examples, setTimeout, mimic an api call.



// have students use the setTimeout function to log something