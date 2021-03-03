const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
  const pages = await globby([
    'src/client/pages/*.js',
    '!src/client/pages/_*.js',
    '!src/client/pages/**/[slug].js',
  ])

  console.log("pages", pages);

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
              const path = page
                .replace('src/client/pages', '')
                .replace('.js', '')
              const route = path === '/index' ? '' : path
              return `
                      <url>
                          <loc>${`https://includ.in${route}`}</loc>
                      </url>
                  `
            })
            .join('')}
      </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()