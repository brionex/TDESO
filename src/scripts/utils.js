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
    img.src = 'src/assets/image.png'
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
