
import { lazyload, onviewport } from './viewport.js'

$(function() {
  $$('video').forEach(video => {
    const { poster, lazyplay } = video.dataset

    if (poster) lazyload(video, () => video.setAttribute('poster', poster))

    if (lazyplay) {
      onviewport(video, 0.5, flag => flag ? video.play() : video.pause())
    }
  })

})
