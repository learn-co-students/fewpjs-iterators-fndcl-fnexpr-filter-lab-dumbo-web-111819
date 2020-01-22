// Code your solution here
function findMatching(drivers,name) { 
   return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }
  function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }