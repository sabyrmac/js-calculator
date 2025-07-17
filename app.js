const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const resultElement = document.getElementById('result')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divBtn = document.getElementById('div')
const submitBtn = document.getElementById('submit')

let action;

const printResult = (result) => {
  if (typeof result === 'string') {
    resultElement.style.color = 'red'
    resultElement.textContent = result
    return
  }
  
  resultElement.style.color = result > 0 ? 'green' : result < 0 ? 'red' : 'gray'
  resultElement.textContent = result
}

const computeNumbersWithAction = (value1, value2, actionValue) => {
  const number1 = +value1.value
  const number2 = +value2.value

  let resultValue = 0

  switch (actionValue) {
    case '+':
      resultValue = number1 + number2
      break
    case '-':
      resultValue = number1 - number2
      break
    case '*':
      resultValue = number1 * number2
      break
    case '/':
      if (number2 === 0) {
        printResult('Ошибка: деление на 0')
        return
      }
      
      resultValue = number1 / number2
      break
  }

  printResult(resultValue)
}

plusBtn.onclick = () => action = '+'

minusBtn.onclick = () => action = '-'

multiplyBtn.onclick = () => action = '*'

divBtn.onclick = () => action = '/'

submitBtn.onclick = () => {
  computeNumbersWithAction(input1, input2, action)
}
