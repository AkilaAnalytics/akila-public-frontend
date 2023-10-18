export let loader = () => {
  const content = `
User-agent: *
Disallow:
Sitemap: https://akilaanalytics.com/sitemap.xml
  `.trim()

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
}
