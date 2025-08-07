export async function getQuestions() {
  const chunks = 9
  const questions = new Map()

  for (let i = 1; i <= chunks; i++) {
    const { [`quest${i}`]: chunk } = await import(
      `./../content/questions/quest${i}.js`
    )
    for (const [key, value] of chunk) {
      questions.set(key, value)
    }
  }

  return questions
}
