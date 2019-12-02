const fs = require('fs')
const file = fs.readFileSync("./day2input.txt", "utf8")
const csvArray = file.split(',')

/* PART 1 */
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






/* PART 2 */
const arrayOf99 = Array(99).fill('i').map((val, i) => i)

// build array of possible noun/verb paris (e.g. [[0, 0], [0, 1], [1, 0], [1,1]] etc.)
const possibleGuesses = arrayOf99.map(num => {
  return arrayOf99.map(innerNum => {
    return [num, innerNum]
  })
}).flat()

const [noun, verb] = possibleGuesses.find(([noun, verb], i) => {
  return calculateAnswer(noun, verb) === 19690720
})

const answer2 = 100 * noun + verb
console.log('Answer pt.2 ', answer2)


/* using for..of loop
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
*/
