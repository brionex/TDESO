import { darkMode } from './scripts/darkmode.js'
import { getQuestions } from './scripts/get-questions.js'
import { createStudyArticle } from './scripts/create-study-article.js'
import { navigation } from './scripts/navigation.js'
import { searchController } from './scripts/search.js'

darkMode('.btn-darkmode')

const questions = await getQuestions()
const containerElem = document.querySelector('.questions')
let counter = 1

const frag = document.createDocumentFragment()
questions.forEach((value, key) => {
  const articleElem = createStudyArticle(key, value, counter)
  frag.appendChild(articleElem)
  counter++
})

containerElem.appendChild(frag)

navigation(questions, '.nav-container', '.btn-nav')
searchController(questions)
