import puppeteer from "puppeteer";

const IG_USERNAME = "test_user_9982"; // optional
const IG_PASSWORD = "my_scrape_account_123"; // optional

async function loginIfNeeded(page) {
  if (!IG_USERNAME || !IG_PASSWORD) return;

  console.log("Logging in...");
  await page.goto("https://www.instagram.com/accounts/login/", {
    waitUntil: "networkidle2",
  });

  // Wait for username input
  await page.waitForSelector('input[name="username"]', { visible: true });

  await page.type('input[name="username"]', IG_USERNAME, { delay: 50 });
  await page.type('input[name="password"]', IG_PASSWORD, { delay: 50 });

  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: "networkidle2" }),
  ]);

  console.log("Logged in");
}

async function getReels(username) {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  // 1) Login (optional but better)
  await loginIfNeeded(page);

  // 2) Go to reels tab
  const url = `https://www.instagram.com/${username}/reels/`;
  console.log("Opening:", url);

  await page.goto(url, { waitUntil: "networkidle2" });

  // 3) Scroll + collect
  const reels = await autoScrollAndCollectReels(page);

  console.log(`Total reels found: ${reels.length}`);
  console.log(reels);

  await browser.close();
}

async function autoScrollAndCollectReels(page) {
  return await page.evaluate(async () => {
    const collected = new Set();
    let lastCount = 0;
    let sameCountTries = 0;
    const maxTriesWithoutNew = 5; // break if 5 times no new reels
    const maxScrolls = 200;       // safety limit

    function collectNow() {
      const anchors = Array.from(document.querySelectorAll("a"));
      anchors.forEach(a => {
        const href = a.href || "";
        if (href.includes("/reel/")) {
          collected.add(href.split("?")[0]); // remove tracking params
        }
      });
    }

    collectNow();

    for (let i = 0; i < maxScrolls; i++) {
      window.scrollBy(0, window.innerHeight);
      await new Promise(r => setTimeout(r, 1000)); // wait for content load

      collectNow();

      const currentCount = collected.size;
      console.log("Scroll", i, "reels:", currentCount);

      if (currentCount === lastCount) {
        sameCountTries++;
      } else {
        sameCountTries = 0;
        lastCount = currentCount;
      }

      // agar kuch time se naye reels nahi aa rahe -> stop
      if (sameCountTries >= maxTriesWithoutNew) {
        console.log("No new reels, stopping scroll.");
        break;
      }

      // agar login wall / popup aa gaya hoga to bhi yahi break ho jayega
    }

    return Array.from(collected);
  });
}

// CHANGE THIS to the account you want
getReels("allahabadi.dev");






// allahabadi.dev