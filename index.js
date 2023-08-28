import puppeteer from "puppeteer";

const GetQuotes = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  //open page
  const page = await browser.newPage();

  await page.goto("http://quotes.toscrape.com/", {
    waitUntil: "domcontentloaded",
  });

  // Get page data
  const quotes = await page.evaluate(() => {
    //Fetch first elememt based on class name
    const quote = document.querySelector(".quote");

    const text = quote.querySelector(".text").innerText;
    const author = quote.querySelector(".author").innerText;

    return { text, author };
  });

  console.log(quotes);

  await browser.close();
};

GetQuotes();
