import { createStudyArticle } from './utils.js'
import { createNavigation } from './utils.js'
import { q1 } from './data/q1.js'
import { q2 } from './data/q2.js'
import { q3 } from './data/q3.js'
import { q4 } from './data/q4.js'
import { q5 } from './data/q5.js'
import { q6 } from './data/q6.js'
import { q7 } from './data/q7.js'
import { q8 } from './data/q8.js'
import { q9 } from './data/q9.js'
import { q10 } from './data/q10.js'
import { q11 } from './data/q11.js'
import { q12 } from './data/q12.js'
import { q13 } from './data/q13.js'

const containerElem = document.querySelector('.questions')
const data = new Map([
  ...q1,
  ...q2,
  ...q3,
  ...q4,
  ...q5,
  ...q6,
  ...q7,
  ...q8,
  ...q9,
  ...q10,
  ...q11,
  ...q12,
  ...q13
])
let counter = 1

const frag = document.createDocumentFragment()
data.forEach((value, key) => {
  const articleElem = createStudyArticle(key, value, counter)
  frag.appendChild(articleElem)
  counter++
})

containerElem.appendChild(frag)
createNavigation(data)
