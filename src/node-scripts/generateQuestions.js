import fs from 'fs-extra'
import path from 'path'
import { JSDOM } from 'jsdom'
import { fileURLToPath } from 'url'

// __dirname para ESModules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputDir = path.join(__dirname, '..', 'content', 'html')
const outputDir = path.join(__dirname, '..', 'content', 'questions')

function utf8ToBase64UrlSafe(str) {
  return Buffer.from(str, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

function parseQuestion(div) {
  const questionText = div.querySelector('.qtext')?.textContent.trim() || ''
  const imageTag = div.querySelector('.qtext img')
  const image = imageTag ? { src: imageTag.src } : null

  const options = [...div.querySelectorAll('.answer > div')].map((el) => {
    const label = el
      .querySelector('.answernumber')
      ?.textContent.replace('.', '')
      .trim()
    const text = el
      .querySelector('.flex-fill')
      ?.textContent.replace(/^'|'$/g, '')
      .trim()
    return { label, text }
  })

  const correctAnswerRaw =
    div.querySelector('.rightanswer')?.textContent.trim() || ''
  const correctAnswer = correctAnswerRaw
    .replace(/^La respuesta correcta es:\s*/, '')
    .replace(/^'|'$/g, '')
    .trim()

  return {
    key: utf8ToBase64UrlSafe(questionText),
    value: {
      question: questionText,
      image,
      options,
      correctAnswer
    }
  }
}

async function run() {
  console.log('🚀 Iniciando proceso de generación de preguntas...')

  // Eliminar carpeta output si existe
  if (await fs.pathExists(outputDir)) {
    console.log(`🗑️ Limpiando carpeta de salida: ${outputDir}`)
    await fs.remove(outputDir)
  }

  // Crear carpeta de salida
  await fs.ensureDir(outputDir)
  console.log(`📂 Carpeta de salida creada: ${outputDir}`)

  const files = await fs.readdir(inputDir)
  const allQuestions = new Map()

  console.log(
    `📄 Encontrados ${files.length} archivos en carpeta de entrada: ${inputDir}`
  )

  for (const file of files) {
    if (!file.endsWith('.html')) continue

    console.log(`🔍 Procesando archivo: ${file}`)
    const filePath = path.join(inputDir, file)
    const html = await fs.readFile(filePath, 'utf8')
    const dom = new JSDOM(html)
    const container = dom.window.document.body

    if (!container) {
      console.log(`⚠️  Archivo ${file} no tiene contenido válido. Se omite.`)
      continue
    }

    const questionDivs = container.querySelectorAll('[id^="question-"]')
    console.log(`  - Encontradas ${questionDivs.length} preguntas`)

    questionDivs.forEach((div) => {
      const { key, value } = parseQuestion(div)
      if (!allQuestions.has(key)) {
        allQuestions.set(key, value)
      }
    })
  }

  console.log(`🧮 Total preguntas únicas: ${allQuestions.size}`)

  // Dividir en bloques de 100
  const entries = [...allQuestions.entries()]
  const chunkSize = 100

  for (let i = 0; i < entries.length; i += chunkSize) {
    const chunk = entries.slice(i, i + chunkSize)
    const from = i + 1
    const to = i + chunk.length

    const fileName = `quest${Math.floor(i / chunkSize) + 1}.js`
    const filePath = path.join(outputDir, fileName)

    console.log(
      `💾 Generando archivo: ${fileName} con preguntas ${from} a ${to}...`
    )

    const mapContent = chunk
      .map(
        ([k, v]) => `  [\n    '${k}',\n    ${JSON.stringify(v, null, 4)}\n  ]`
      )
      .join(',\n')

    const exportName = `quest${Math.floor(i / chunkSize) + 1}`

    const fileContent = `// preguntas del ${from} - ${to}\nexport const ${exportName} = new Map([\n${mapContent}\n]);\n`

    await fs.writeFile(filePath, fileContent, 'utf8')
  }

  console.log('🎉 Proceso completado con éxito.')
}

run().catch((e) => {
  console.error('❌ Error durante el proceso:', e)
})
