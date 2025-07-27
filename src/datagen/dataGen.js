const questionsElements = document.querySelectorAll('.questions > div')

function utf8ToBase64UrlSafe(str) {
  // Convierte string a UTF-8 bytes
  const utf8Bytes = new TextEncoder().encode(str)
  // Convierte bytes a Base64
  const base64String = btoa(String.fromCharCode(...utf8Bytes))
  // Base64 URL-safe
  return base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function extractQuestionData(container) {
  const formatTextWithBreaks = (html) => {
    const temp = document.createElement('div')
    temp.innerHTML = html

    const result = []

    temp.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'P') {
        const line = node.textContent.trim()
        if (line) result.push(line)
      } else if (node.nodeType === Node.TEXT_NODE) {
        const line = node.textContent.trim()
        if (line) result.push(line)
      } else if (node.tagName === 'BR') {
        result.push('<br>')
      }
    })

    return result.join('<br>')
  }

  const getImage = () => {
    const img = container.querySelector('.qtext img')
    return img ? { src: img.src } : null
  }

  const getOptions = () => {
    const options = []
    const answers = container.querySelectorAll('.answer > div')

    answers.forEach((answerDiv) => {
      const input = answerDiv.querySelector('input[type="radio"]')
      const label = answerDiv.querySelector('[data-region="answer-label"]')
      const letter = label
        ?.querySelector('.answernumber')
        ?.textContent.trim()
        .replace('.', '')
      const text = label
        ?.querySelector('.flex-fill')
        ?.textContent.trim()
        .replace(/^'|'$/g, '')

      let status = 'none'
      if (answerDiv.classList.contains('correct')) status = 'correct'
      else if (answerDiv.classList.contains('incorrect')) status = 'incorrect'

      options.push({
        label: letter,
        text: text,
        status: status
      })
    })

    return options
  }

  const rawQuestionHTML = container.querySelector('.qtext')?.innerHTML || ''
  const question = formatTextWithBreaks(rawQuestionHTML)
  const image = getImage()
  const options = getOptions()

  const rawAnswer = container.querySelector('.rightanswer')?.textContent || ''
  const correctAnswer = rawAnswer
    .replace(/^.*?:/, '')
    .replace('La respuesta correcta es:', '')
    .trim()
    .replace(/^'|'$/g, '')

  return {
    question,
    image,
    options,
    correctAnswer
  }
}

function copyData() {
  const data = new Map()

  questionsElements.forEach((container) => {
    const questionData = extractQuestionData(container)
    data.set(utf8ToBase64UrlSafe(questionData.question), questionData)
  })

  navigator.clipboard
    .writeText(JSON.stringify(Array.from(data)))
    .then(() => alert('¡Copiado al portapapeles!'))
}

copyData()
