// Code your solution here
findMatching = (drivers, str) => {
  let results = drivers.filter(driver.name.toLowerCase() === str.toLowerCase())
  return results
}