// Code your solution here
findMatching = (drivers, str) => {
  let results = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
  return results
}