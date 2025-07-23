export function darkMode(selector) {
  const btn = document.querySelector(selector)

  btn?.addEventListener('click', () => {
    btn.classList.toggle('active')
    document.body.classList.toggle('dark')

    localStorage.setItem('darkMode', document.body.classList.contains('dark'))
  })
}
