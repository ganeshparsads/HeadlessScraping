const puppeteer = require('puppeteer');
const CREDS = require('./creds');

async function run() {
    // const browser = await puppeteer.launch();
    // for visual debugging
    const browser = await puppeteer.launch({
        headless: false
    });

    // dom element selectors
    const USERNAME_SELECTOR = '#login_field';
    const PASSWORD_SELECTOR = '#password';
    const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

    const page = await browser.newPage();

    await page.goto('https://github.com/login');

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.userName);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);

    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();

    // browser.close();
}

run();
