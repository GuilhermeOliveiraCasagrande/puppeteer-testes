const puppeteer = require('puppeteer')
try {
    (async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.goto('https://youtube.com')
        await page.type("input#search", "helltaker ost remix")
        await page.click("button#search-icon-legacy")
        await page.reload()
        const videos = await page.$$eval("a#video-title", anchors => anchors.map(anchor => anchor.href))
        console.log(page.url())
        console.log(videos)
        browser.close()
    })()
} catch (err) {
    console.error(err)
}