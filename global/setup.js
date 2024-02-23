
import { listen } from '/nueui/dialog.js'
import { ping } from '/ext/ping.js'
import { $ } from '/@nue/kit/island.js'

// geo ping
if (!location.port) ping()

// dialogs
listen()


/* favicon circle
function getNextIcon() {
  const icons = 'stack n u e'.split(' ')
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
*/


$('body').classList.add('loaded')

const ref = document.referrer
const is_external = ref && !ref.includes(location.hostname)

setTimeout(function() {
  $('.site-header').classList.add('visible')

}, is_external && location.pathname.startsWith('/blog') ? 1800 : 0)