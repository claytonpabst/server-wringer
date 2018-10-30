let request = require('request')
const puppeteer = require('puppeteer');


async function massGetSite(){
  let counter = 0
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();  
  await page.setCacheEnabled( false );

  // const emailInput = '#sign-in_content-wrapper > form > div:nth-child(0) > input';
  
  for(let i=0; i<100; i++){
    await page.goto('https://www.linkriff.com/');
    await page.waitForSelector('.App');
    // await page.waitForSelector('.main-header_sign-in-button');
    // await page.click('.main-header_sign-in-button')
    // await page.waitForSelector(emailInput)
    // await page.type(emailInput, 'yooooo')
    // await page.waitFor(10000);
    // const bodyHandle = await page.$('body');
    // const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    // console.log(html)
    console.log(counter + "returned")
    counter++
  }
  browser.close();

}
massGetSite()
massGetSite()
massGetSite()
massGetSite()