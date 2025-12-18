const puppeteer = require("puppeteer")
const path = require("path")
require("dotenv").config()

//const CV_URL='https://mall3a.github.io/resume.github.io/'
const URL = 'http://localhost:3000/resume.github.io'
const OUTPUT = 'Constanza_Mallea_Frontend_Developer_Dec_2025.png'


    ; (async () => {
        const browser = await puppeteer.launch({
            headless: "new",
            defaultViewport: null,
        })

        const page = await browser.newPage()
        await page.setViewport({
            width: 1440,
            height: 900,
            deviceScaleFactor: 2,
        })

        await page.goto(URL, {
            waitUntil: "networkidle0",
        })

        // Esperar a que cargue el CV
        await page.waitForSelector("#cv")

        const cv = await page.$("#cv")
        const boundingBox = await cv.boundingBox()

        await page.screenshot({
            path: OUTPUT,
            clip: {
                x: boundingBox.x,
                y: boundingBox.y,
                width: boundingBox.width,
                height: boundingBox.height,
            },
        })

        await browser.close()

        console.log(`✅ CV exportado correctamente: ${OUTPUT}`)
    })()
