const fs = require('fs')

// read input file and split into lines with parsed numbers and filter out empty lines
const inputFile = fs.readFileSync('./day1input.txt', 'utf8')
const inputLines = inputFile.split("\n").map(line => parseInt(line)).filter(Boolean)

const calculateFuel = number => Math.floor(number / 3) - 2

// pt. 1
const answer1 = inputLines.reduce((acc, line) => {
  return acc + calculateFuel(line)
})

console.log('pt1: ', answer1) // 3406978

// pt. 2
const answer2 = inputLines.reduce((acc, line) => {
  const fuelForLine = calculateFuel(line)

  let currentFuelForLine = fuelForLine
  let totalFuelForLine = fuelForLine

  while (currentFuelForLine > 0) {
    const fuel = calculateFuel(currentFuelForLine)
    if (fuel > 0) {
      totalFuelForLine += fuel
    }
    currentFuelForLine = fuel
  }

  return acc + totalFuelForLine 
}, 0)

console.log('pt2: ', answer2) // 5019767

