
import { listen } from '/nueui/dialog.js'
import { ping } from '/ext/ping.js'
import { $ } from 'island'

// geo ping
if (!location.port) ping()

// dialogs
listen()


// favicon circle
function getNextIcon() {
  const icons = 'stack nb ub eb'.split(' ')
  try {
    let prev = 1 * sessionStorage.favicon || 0
    const i = prev == 3 ? 0 : ++prev
    sessionStorage.favicon = i
    return icons[i]

  } catch (e) {
    return icons[Math.round(Math.random() * 4)]
  }
}

function circleFavicon() {
  $("link[rel='icon']").setAttribute('href', `/global/logo/${getNextIcon()}.svg`)
}


circleFavicon()

$('body').classList.add('loaded')