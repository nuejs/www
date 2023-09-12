
// Docs area only

import { $ } from 'island'

function toggle(name, flag) {
  $('body').classList.toggle(name, flag)
}


// .header-hidden
const o1 = new IntersectionObserver(function([entry]) {
  toggle('header-hidden', !entry.isIntersecting)

}, { rootMargin: '40px' })

o1.observe($('.site-header'))


// .footer-visible
const o2 = new IntersectionObserver(function([entry]) {
  toggle('footer-visible', entry.isIntersecting)

}, { rootMargin: '40px' })

o2.observe($('.site-footer'))