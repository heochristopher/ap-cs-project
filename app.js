function calculate() {
  const m = Number(document.getElementById('slope-input').value)
  const b = Number(document.getElementById('y-intercept-input').value)
  const length = Number(document.getElementById('length-input').value) - 1

  const yValues = []
  const xValues = []

  for(let i =0; i <= length; i++) {
    const yValue = m * i + b
    yValues.push(yValue)
    xValues.push(i)
  }

  if(xValues.length === 0 || yValues.length === 0 || length === 'undefined') {
    alert('Enter all values')
  } else if(document.getElementById('x-values').childElementCount > 0) {
    while( document.getElementById('x-values').firstChild) {
      document.getElementById('x-values').removeChild(document.getElementById('x-values').firstChild)
    }
    while( document.getElementById('y-values').firstChild) {
      document.getElementById('y-values').removeChild(document.getElementById('y-values').firstChild)
    }
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

const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function() {
  
  calculate()
})

