
const GH = '//github.com/nuejs/nue/tree/master/packages/templates'

const PLAY = '//play.tailwindcss.com'

// nue stats .css
const GLOBALS = {
  'header-and-footer': 483,
  'burger-menu': 479,
  'button': 384,
  'global': 164,
  'stack': 150,
}

const SITES = [
  {
    dir: 'aimee-app',
    name: 'Aimee App',
    totals: { design: 864, legacy: 4368 },

    pages: {
      home: 141,
      'about/about': 260,
      'changelog/changelog': 149,
      'pricing/pricing': 276,
      'start/form': 164,
      'start/start': 459,
    }
  },
  {
    dir: 'sofa-company',
    name: 'The Sofa Company',
    totals: { design: 1220, legacy: 5390 },
    exclude: ['stack'],

    pages: {
      home: 386,
      'about/about': 270,
      'buy/buy': 428,
      'sofas/sofas': 982,
      'sofas/stack': 150,
    }
  },
  {
    dir: 'mona-editor',
    name: 'Mona Editor',
    totals: { design: 727, legacy: 3917 },
    exclude: ['burger-menu'],

    pages: {
      home: 579,
      'join/form': 304,
      'join/join': 58,
    }
  },
]

const TAILWIND = {
  base:  3265,
  play: 'play.tailwindcss.com',

  catalyst: {
    code: 'rD3Cg6LJmN',
    name: 'Catalyst button',
    totals: { css: 5276, dsl: 1821 }
  },
  dialog: {
    code: '556eyTllIB',
    name: 'Catalyst dialog',
    totals: { css: 10911, dsl: 5687 }
  },
  shadcn: {
    code: 'dJjQy5vBxO',
    name: 'Shadcn/UI button',
    totals: { css: 1306, dsl: 306 }
  },
}



function getTotal(obj) {
  let total = 0
  for (const key in obj) total += obj[key]
  return total
}

function getGlobals(exclude=[]) {
  const globals = { ...GLOBALS }
  exclude.forEach(key => delete globals[key])
  return globals
}


// { globals, design, front page, pages, all }
function setTotals(site) {
  const { totals, pages } = site
  site.globals = getGlobals(site.exclude)

  totals.globals = getTotal(site.globals)
  const design = totals.globals + totals.design

  totals.home = design + pages.home
  totals.pages = getTotal(pages)
  totals.all = design + totals.pages

  // "grid", "stack" & "random" classnames (random for safety)
  totals.all += 15

  return site
}

function createSiteCombo() {
  const totals = { globals: getTotal(GLOBALS), design: 0, pages: 0 }

  SITES.forEach(site => {
    totals.design += site.totals.design
    totals.pages += getTotal(site.pages)
  })

  // remove duplicates (stack only currently)
  totals.pages -= 150
  totals.all = getTotal(totals)
  totals.all += 15 // class names

  return { totals }
}

function getTailwind(key) {
  const item = { ...TAILWIND[key] }
  const { totals } = item
  totals.base =  TAILWIND.base
  totals.all = getTotal(totals)
  return item
}

function getSite(dir) {
  const site = SITES.find(el => el.dir == dir)
  setTotals(site)
  return
}


// console.info(setTotals(SITES[1]))
// console.info(createSiteCombo())
// console.info(getTailwind('catalyst'))




