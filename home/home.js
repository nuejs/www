
// CSS- based animations

import { $$ } from '/@nue/kit/island.js'

$$('main > section').forEach(root => {

  const observer = new IntersectionObserver(function([entry]) {
    if (entry.isIntersecting) root.classList.add('in-viewport')

  }) // , { rootMargin: '40px' })

  observer.observe(root)

})


