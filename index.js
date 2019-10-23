// Code your solution here
findMatching = (drivers, str) => {
  let results = drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase())
  return results
}