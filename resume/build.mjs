// Renders resume/resume.html to public/Lenny-Kibe-Resume.pdf.
// Usage: npm run resume  (first time: npx playwright install chromium)
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const html = readFileSync(`${root}resume/resume.html`, "utf8");
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: `${root}public/Lenny-Kibe-Resume.pdf`, preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log("Wrote public/Lenny-Kibe-Resume.pdf");
