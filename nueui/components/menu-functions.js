
/* Common functionality for both listbox and combobox */

// class names
const FOCUS = 'focused'
const SEL = 'selected'
const OPEN = 'opened'

function setupClick(done) {
  const fn = (e) => {
    if (!e.target.closest('.' + OPEN)) {
      removeEventListener('click', fn)
      done(e)
    }
  }

  // delay so that click wont open & close simultaneously
  setTimeout(() => { addEventListener('click', fn) }, 1)
}

function setupEsc(done) {
  const fn = (e) => {
    if (e.key == 'Escape') {
      removeEventListener('keyup', fn)
      done(e)
    }
  }
  addEventListener('keyup', fn)
}

function closest(el, menu) {
  while (el && el.parentNode != menu) el = el.parentNode
  return el
}


// mouse & keyboard navigation
function setupNavi(menu, onselect, selectedIndex) {
  const children = Array.from(menu.children)
  let focused = children[selectedIndex]

  focused?.classList.add(SEL)

  function setFocus(el) {
    if (el && !el.dataset.skip) {
      const prev = focused || menu.querySelector('.' + FOCUS)
      prev?.classList.remove(FOCUS)
      el.classList.add(FOCUS)
      focused = el
    }
  }

  // hovering
  menu.onmouseover = (e) => {
    setFocus(closest(e.target, menu))
  }

  // keyboard
  const fn = (e) => {
    const arrow = ['ArrowUp', 'ArrowDown'].indexOf(e.key)

    if (arrow >= 0) {
      const visible = children.filter(el => !el.hidden)
      const i = visible.indexOf(focused)
      let am = arrow ? 1 : -1
      const to = visible[i + am]
      if (to && !to.textContent) am *= 2
      setFocus(visible[i + am])
      e.preventDefault()
    }

    // selection
    if ([' ', 'Enter', 'Tab'].includes(e.key)) {
      onselect(children.indexOf(focused))
      e.preventDefault()
    }
  }

  // setTimeout -> early Enter wont open & close at once
  setTimeout(() => { addEventListener('keydown', fn) }, 1)

  return () => { removeEventListener('keydown', fn) }
}


export function setupMenu(trigger, onselect) {
  const menu = trigger.nextElementSibling
  const root = trigger.parentNode
  var clean = () => {}
  var selectedIndex

  function open() {
    clean()

    // select menu's only
    if (onselect) clean = setupNavi(menu, select, selectedIndex)
    root.classList.add(OPEN)
    setupClick(close)
    setupEsc(close)
  }

  function close() {
    root.classList.remove(OPEN)
    clean()
  }

  function select(i) {
    root.querySelector('.' + SEL)?.classList.remove(SEL)
    selectedIndex = i
    onselect(i)
    close()
  }

  // trigger.onclick = open

  trigger.onfocus = open

  trigger.onkeydown = function(e) {
    if (e.key != 'Escape' && !root.classList.contains(OPEN)) {
      open()
    }
  }

  menu.onclick = (e) => {
    const el = closest(e.target, menu)
    if (!el.dataset.skip) {
      const i = Array.from(menu.children).indexOf(el)
      select(i)
    }
  }

}

export function createOptions(data) {
  const arr = Array.isArray(data) ? data : Object.keys(data).map(key => {
    return { key, label: data[key] }
  })

  return arr.map(el => {
    el = el || ''
    if (typeof el == 'string') el = { label: el }
    return el
  })
}

