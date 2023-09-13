
import { $, mount } from 'island'

function setHash(hash) {
  history.replaceState(0, 0, hash)
}

export function openDialog(dialog) {
  dialog.open = null
  dialog.showModal()
  const is_fixed = dialog.getAttribute('scroll') == 'no'

  // fixed -> no scrolling
  const html = $('html')
  if (is_fixed) html.style.overflow = 'hidden'

  // close
  dialog.onclose = () => {
    if (is_fixed) html.style.overflow = 'initial'
    setHash(location.pathname)
  }

  // non-interactive -> click closes
  dialog.onclick = !$('input', dialog) ? dialog.close : (e) => {
    if (e.target == dialog || e.target.closest('.dialog-close')) {
      dialog.close()
    }
  }

  return dialog
}


function addWrap(name) {
  let wrap = $(`[name="${name}"]`)
  if (!wrap) {
    wrap = document.createElement('div').setAttribute('name', name)
    $('body').append(wrap)
  }
  return wrap
}

export async function append(name, data) {
  return await mount(name, addWrap(name), data)
}

// TODO: confirm, prompt
export function alert(title, desc) {
  return append('alert', { title, desc }).then(dialog => openDialog(dialog))
}


function findDialog(id) {
  const el = id && id[0] == '#' && $(id)
  return el?.showModal && el
}


/* listen for dialog trigger clicks */
export function listen() {
  const dialog = findDialog(location.hash)
  if (dialog) openDialog(dialog)

  document.addEventListener('click', function(e) {
    const el = e.target.closest('[href]')
    const dialog = findDialog(el?.getAttribute('href'))

    if (dialog) {
      openDialog(dialog)
      e.preventDefault()
      setHash(href)
    }
  })
}


