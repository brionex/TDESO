export function searchController(questions) {
  const input = document.querySelector('.search')
  const resultsContainer = document.querySelector('.results')

  input.addEventListener('input', () => {
    const term = normalizeText(input.value.trim())

    resultsContainer.innerHTML = ''

    if (term === '') return

    let count = 0
    let resultsFound = 0

    for (const [index, value] of questions.entries()) {
      const questionText = normalizeText(value.question)
      count++

      if (questionText.includes(term)) {
        resultsFound++

        const article = document.createElement('article')
        article.dataset.id = index

        const span = document.createElement('span')
        span.textContent = count

        const p = document.createElement('p')
        p.textContent = cleanText(value.question)

        article.appendChild(span)
        article.appendChild(p)

        resultsContainer.appendChild(article)
      }
    }

    if (resultsFound === 0) {
      const noResults = document.createElement('p')
      noResults.textContent = 'No se encontraron coincidencias.'
      resultsContainer.appendChild(noResults)
    }
  })

  resultsContainer.addEventListener('click', (e) => {
    const article = e.target.closest('article')

    if (article) {
      const id = article.dataset.id
      window.location.hash = id
      input.value = ''
    }
  })

  // Para comparar texto en búsquedas
  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }

  function cleanText(text) {
    return text.replace(/\s+/g, ' ').trim()
  }
}
