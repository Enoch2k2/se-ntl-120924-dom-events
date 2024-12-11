// what is the over all user process
// what is the trigger?
// what is the effect?

// trigger: change the value of the input
// effect: update the paragraph to show the value of the input

// addEventListener(eventType, callback)

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector('button')
  const p = document.querySelector('p')
  const userInput = document.getElementById('user-input')
  const userInputDisplay = document.getElementById('user-input-display')
  const form = document.querySelector('form')
  const h3 = document.querySelector('h3')
  const h1 = document.querySelector('h1')
  
  btn.addEventListener("click", changeToBlue)
  
  function changeToBlue() {
    h1.style.color = 'blue'
  }

  p.addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '20px'
  })

  p.addEventListener('mouseleave', function(event) {
    event.target.style.fontSize = "16px"
  })

  userInput.addEventListener('beforeinput', function(event) {
    if (event.inputType == "deleteContentBackward") {
      userInputDisplay.innerText = ""
      return
    }
    userInputDisplay.innerText = event.target.value + event.data
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = form[0].value
    const password = form[1].value
    const accountCreated = document.getElementById("account-created")

    accountCreated.innerText = `Account ${username} has been created`
    
    setTimeout(() => {
      accountCreated.innerText = ''
    }, 2000)
  })

  h3.addEventListener('dblclick', (event) => {
    h1.classList.toggle("hide")
  })
})
