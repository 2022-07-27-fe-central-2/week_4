const myPromise = new Promise((resolve, reject) => {
  // resolve('not in setTimeout fulfilled')
  // reject('not in setTimeout Oh no')

  setTimeout(
    () => {
      resolve('fulfilled')
      // reject('oh no')
    }, 3000
  )
})

myPromise
.then(v=> console.log(v))
.catch(e => console.log(e))
