// Code your solution here
function matchName(drivers,string){
    let filteredDrivers=drivers.filter(element=>element.name===string)
    return filteredDrivers
}

function fuzzyMatch(drivers,string){
    let filteredDrivers=drivers.filter(element=>element.startsWith(string))
    return filteredDrivers
}

function findMatching(drivers,string){
    let filteredDrivers=drivers.filter(element=>element.toLowerCase()===string.toLowerCase())
    return filteredDrivers
}
