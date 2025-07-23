export function navigation(data, navSelector, btnSelector) {
  const navContainer = document.querySelector(navSelector)
  const btn = document.querySelector(btnSelector)
  const floatingBox = navContainer.querySelector('.floating-box')
  const list = navContainer.querySelector('nav ul')
  const box = floatingBox.firstElementChild.firstElementChild
  const fragment = document.createDocumentFragment()

  let counter = 1

  data.forEach((value, key) => {
    const li = document.createElement('li')
    li.textContent = counter
    li.dataset.id = key
    li.dataset.content = value.question
    li.dataset.number = counter
    fragment.appendChild(li)
    counter++
  })

  list.appendChild(fragment)

  btn?.addEventListener('click', () => {
    navContainer.classList.toggle('active')
  })

  list.addEventListener('mousemove', (e) => {
    const target = e.target
    if (target && target.tagName === 'LI') {
      const number = target.dataset.number
      box.innerHTML = `<span>${number}</span> <br /> ${target.dataset.content}`
    }
  })

  list.addEventListener('mouseleave', () => {
    box.textContent = '...'
  })

  list.addEventListener('click', (e) => {
    const target = e.target

    if (target && target.tagName === 'LI') {
      const id = target.dataset.id
      window.location.hash = id
      navContainer.classList.remove('active')
    }
  })
}
