
function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driversName => driversName.startsWith(string))
    return result
}

function matchName(drivers, string) {
    const result = drivers.filter(drivers => drivers.name === string)
    return result
}

