const fs = require('fs')
const file = fs.readFileSync("./day2input.txt", "utf8")
const csvArray = file.split(',')

// pt. 1
const parsedArray = csvArray.map(i => parseInt(i))

const calculateAnswer = (num1, num2) => {
  const array = [...parsedArray]
  array[1] = num1
  array[2] = num2

  for(const [i, num] of array.entries()) {
    if (i === 0 || i % 4 === 0) {
      if (num === 99) {
        break
      }
      // is opcode
      const adder1 = array[i + 1]
      const adder2 = array[i + 2]
      const replacement = array[i + 3]
  
      if (num === 1) {
        array[replacement] = array[adder1] + array[adder2]
      } else if (num === 2) {
        array[replacement] = array[adder1] *  array[adder2]
      }
    }
  }

  return array[0]
}

const answer = calculateAnswer(12, 2)
console.log('Answer pt.1 ', answer) // 4090689

// pt. 2
const arrayOf99 = Array(99).fill('i').map((val, i) => i)

let noun;
let verb;

for(const [i, val] of arrayOf99.entries()) {
  for(const [innerI, val] of arrayOf99.entries()) {
    if (calculateAnswer(i, innerI) === 19690720)  {
      noun = i
      verb = innerI
    }
  }
}

const answer2 = 100 * noun + verb
console.log('Answer pt.2 ', answer2) // 7733

