export function createStudyArticle(id, obj, counter) {
  const article = document.createElement('article')
  article.classList.add('study-question')
  article.id = id

  // Counter
  const counterElem = document.createElement('div')
  counterElem.classList.add('counter')
  counterElem.innerHTML = `Pregunta ${counter}`
  article.appendChild(counterElem)

  // Pregunta
  const questionText = document.createElement('p')
  questionText.classList.add('question')
  questionText.innerHTML = obj.question
  article.appendChild(questionText)

  // Imagen si existe
  if (obj.image) {
    const img = document.createElement('img')
    img.src = obj.image.src
    img.alt = 'Imagen relacionada con la pregunta'
    article.appendChild(img)
  }

  // Opciones
  const ul = document.createElement('ul')
  ul.classList.add('options')

  obj.options.forEach((opt) => {
    const li = document.createElement('li')
    li.classList.add('option')

    if (opt.status === 'correct') li.classList.add('correct')
    else if (opt.status === 'incorrect') li.classList.add('incorrect')

    li.innerHTML = `<strong>${opt.label}.</strong> ${opt.text}`
    ul.appendChild(li)
  })

  article.appendChild(ul)

  // Respuesta correcta al final
  const correctAnswer = document.createElement('div')
  correctAnswer.classList.add('correct-answer')
  correctAnswer.innerHTML = `<strong>Respuesta correcta:</strong> ${obj.correctAnswer}`
  article.appendChild(correctAnswer)

  return article
}

export function createNavigation(data) {
  let counter = 1

  const nav = document.createElement('nav')
  nav.classList.add('navigation')

  const list = document.createElement('ul')
  const box = document.createElement('div')
  box.classList.add('floating-box')

  data.forEach((value, key) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = counter
    a.href = `#${key}`
    li.appendChild(a)
    list.appendChild(li)
    counter++

    li.addEventListener('mouseenter', () => {
      box.textContent = value.question
    })

    li.addEventListener('mouseleave', () => {
      box.textContent = ''
    })

    list.addEventListener('mouseenter', () => {
      box.style.display = 'block'
    })

    list.addEventListener('mouseleave', () => {
      box.style.display = 'none'
    })
  })

  nav.appendChild(list)
  document.body.appendChild(box)
  document.body.appendChild(nav)
}
