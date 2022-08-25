const addressBook = [
  {
    name: 'kevin',
    address: '124 something st.'
  },
  {
    name: 'barry',
    address: '11234 asdf'
  }
]
// filter the addressBook Array, only names that start with k and return new array,

// console.log(addressBook)

const filterByStartingLetter = (arr, char, ) => {
  const filteredArr = []
  // for (entry of arr) {
  //   // console.log(entry)
  //   // console.log(entry.name[0])
  //   if (entry.name[0] === char || ) {
  //     filteredArr.push(entry)
  //   }
  // }
  // console.log(filteredArr)
  // return filteredArr
  // for (let i = 0; i < arr.length -1; i++) {
  //   if (arr[i].name[0] === char) {
  //     filteredArr.push(arr[i])
  //   }
  // }
  console.log(filteredArr)
  // console.log(arr.filter(entry => entry.name[0] === char))
  // return arr.filter(entry => entry.name[0] === char)
}

filterByStartingLetter(addressBook, 'k')