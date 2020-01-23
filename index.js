// Code your solution here
const findMatching = (drivers, string) => {
    return drivers.filter((ele) => {
      return ele.toLowerCase() === string.toLowerCase()
    })
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter((ele) => {
    return ele[0] === string[0]
  })
}

const matchName = (drivers, string) => {
  return drivers.filter((ele) => {
      return ele.name === string
  })
}
