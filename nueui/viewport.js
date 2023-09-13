
let observers = []

export function onviewport(root, opts, fn) {
  if (1 * opts) opts = { threshold: opts }

  const obs = new IntersectionObserver(arr => {
    arr.forEach(e => fn(e.isIntersecting, obs))
  }, opts)

  observers.push(obs)
  obs.observe(root)
}

export function lazyload(root, fn) {
  return onviewport(root, { rootMargin: '250px', treshold: 0 }, (flag, obs) => {
    if (flag) {
      obs.unobserve(root)
      fn()
    }
  })
}

export function disconnect() {
  for (const el of observers) el.disconnect()
  observers = []
}
