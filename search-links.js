const puppeteer = require('puppeteer')
try {
    (async () => {
        const browser = await puppeteer.launch() //Roda  navegador
        const page = await browser.newPage() //Abre uma página

        await page.goto('https://youtube.com') //Acessa esse site
        await page.type("input#search", "helltaker ost remix") //Vai no elemento e escreve algo
        await page.click("button#search-icon-legacy") //Clica um elemento
        await page.reload() //Recarrega a página

        const videos = await page.$$eval("a#video-title", //Pega todos os elementos que achar e coloca em um array na função
            anchors => //Pega os elementos
                anchors.map( //Transforma em outro array
                    anchor => anchor.href)) //Um array de endereços, e coloca na variável
        console.log(page.url()) //Mosta o url da página
        console.log(videos)
        browser.close() //Fecha o navegador
    })()
} catch (err) {
    console.error(err)
}