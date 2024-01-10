
import { $, $$ } from '/@nue/kit/island.js'

/* CSS- based animations


$$('main > section').forEach(root => {

  const observer = new IntersectionObserver(function([entry]) {
    if (entry.isIntersecting) root.classList.add('in-viewport')

  }) // , { rootMargin: '40px' })

  observer.observe(root)

})

*/

$$('.tools li').forEach(li => {

  li.onclick = function() {
    const a = $('p a', li)
    if (a) location.href = a.getAttribute('href')
  }

})