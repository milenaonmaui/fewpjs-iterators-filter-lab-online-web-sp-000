// Code your solution here
findMatching = (drivers, str) => {
  let results = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
  return results
}

function fuzzyMatch(drivers, str){
  let len = str.length;
  return drivers.filter(driver => driver.toLowerCase().slice(len) === str.toLowerCase())
}