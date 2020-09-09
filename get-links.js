const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch() //Roda o browser
    const page = await browser.newPage() //Abre uma página
    await page.goto('https://www.youtube.com/results?search_query=helltaker+ost+remix') //Faz a página ir para um endereço

    // execute standard javascript in the context of the page.
    let links = await page.$$eval( //Procura na página
        'a#video-title', //Os elementos como se fosse css
        links => links.map( //Pega os elementos e faz alguma coisa, e retorna o resultado
            link => `${link.href}` //Pega o atributo do elemento
            ).slice(0, 10)
    )
    links = links.filter(link => !link.split("/").includes('playlist'))
    console.log(links)
    await page.close() //Fecha a página
    await browser.close() //Fecha o navegador
})()