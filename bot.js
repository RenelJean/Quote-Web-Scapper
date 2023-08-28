//adding Puppeteer library
const pt = require("puppeteer");
let targetURL = "https://www.target.com/";
pt.launch({
  headless: "new",
}).then(async (browser) => {
  //browser new page
  const p = await browser.newPage();
  //set viewpoint of browser page
  await p.setViewport({ width: 1000, height: 500 });
  //launch URL
  await p.goto(targetURL);

  //capture screenshot
  await p.screenshot({
    path: "browserstack-demo.png",
  });
  //browser close
  await browser.close();
});
