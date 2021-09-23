function calculate() {
  const m = Number(document.getElementById('slope-input').value)
  const b = Number(document.getElementById('y-intercept-input').value)
  const length = Number(document.getElementById('length-input').value)

  const yValues = []
  const xValues = []

  for(let i =0; i <= length; i++) {
    const yValue = m * i + b
    yValues.push(yValue)
    xValues.push(i)
  }
  console.log(yValues, xValues)

  xValues.forEach((x) => {
    const li = document.createElement('li')
    const value = document.createTextNode(x)
    li.appendChild(value)
    document.getElementById('x-values').appendChild(li)
  })
  yValues.forEach((y) => {
    const li = document.createElement('li')
    const value = document.createTextNode(y)
    li.appendChild(value)
    document.getElementById('y-values').appendChild(li)
  })
  
}

const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function() {
  calculate()
})

