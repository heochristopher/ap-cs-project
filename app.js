function calculate(isSlope) {

  if (isSlope) {
    
    const x1 = Number(document.getElementById('x1').value)
    const x2 = Number(document.getElementById('x2').value)
    const y1 = Number(document.getElementById('y1').value)
    const y2 = Number(document.getElementById('y2').value)

    //calculate slope and y intercept
    const m = (y1-y2)/(x1-x2)
    const b = y1 - m * x1

    //if equation exists, replace and add new equation
    if(document.getElementById('equation').childElementCount > 0) {
      document.getElementById('equation').removeChild(document.getElementById('equation').firstChild)
      const equation = document.createElement('equation')
      const value = document.createTextNode(`y = ${m}x + ${b}`)
      equation.appendChild(value)
      document.getElementById('equation').appendChild(equation)
    } else {
      const equation = document.createElement('equation')
      const value = document.createTextNode(`y = ${m}x + ${b}`)
      equation.appendChild(value)
      document.getElementById('equation').appendChild(equation)
    }
  } else {
//user inputs
const m = Number(document.getElementById('slope-input').value)
const b = Number(document.getElementById('y-intercept-input').value)
const length = Number(document.getElementById('length-input').value) - 1

//array for storing output values
const yValues = []
const xValues = []

//calculate output values
for(let i =0; i <= length; i++) {
  //y = mx + b
  const yValue = m * i + b
  //push y value to the array
  yValues.push(yValue)
  //push iterator as x to the array
  xValues.push(i)
}

//alert if any input is left blank OR length is 0
if(xValues.length === 0 || yValues.length === 0 || length === 'undefined') {
  alert('Enter all values')
}
//if there are values present on the page, replace them with new values
 else if(document.getElementById('x-values').childElementCount > 0) {
   //remove existing values
  while( document.getElementById('x-values').firstChild) {
    document.getElementById('x-values').removeChild(document.getElementById('x-values').firstChild)
  }
  while( document.getElementById('y-values').firstChild) {
    document.getElementById('y-values').removeChild(document.getElementById('y-values').firstChild)
  }
  //add new values
  document.getElementById('x-values').innerHTML += "X Values"
  xValues.forEach((x) => {
    const li = document.createElement('li')
    const value = document.createTextNode(x)
    li.appendChild(value)
    document.getElementById('x-values').appendChild(li)
  })
   
  document.getElementById('y-values').innerHTML += "Y Values"
  yValues.forEach((y) => {
    const li = document.createElement('li')
    const value = document.createTextNode(y)
    li.appendChild(value)
    document.getElementById('y-values').appendChild(li)
  })
}
//if no elements on the page, just add new values
  else {
  document.getElementById('x-values').innerHTML += "X Values"
  xValues.forEach((x) => {
    const li = document.createElement('li')
    const value = document.createTextNode(x)
    li.appendChild(value)
    document.getElementById('x-values').appendChild(li)
  })
   
  document.getElementById('y-values').innerHTML += "Y Values"
  yValues.forEach((y) => {
    const li = document.createElement('li')
    const value = document.createTextNode(y)
    li.appendChild(value)
    document.getElementById('y-values').appendChild(li)
  })
}
  }
   
}

const valuesBtn = document.getElementById('values-btn')
//when calculate button clicked, store user inputs and call function
valuesBtn.addEventListener('click', function() {
  calculate(false)
})

const slopeBtn = document.getElementById('slope-btn')
//when calculate button clicked, store user inputs and call function
slopeBtn.addEventListener('click', function() {
  calculate(true)
})

