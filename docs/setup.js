
// Docs area only

import { $ } from 'island'

const observer = new IntersectionObserver(function([entry]) {
  $('body').classList.toggle('header-hidden', !entry.isIntersecting)

}, {
  rootMargin: '40px',
  // threshold: 1.0,
})


observer.observe($('.site-header'))