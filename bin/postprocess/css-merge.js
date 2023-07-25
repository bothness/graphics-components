import { get } from "https";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { minify } from "csso";

const path = "./dist/css";

function fetch(url) {
  return new Promise((resolve) => {
    get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        resolve(data);
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  });
}

async function merge(css) {
  const imports = css.match(/^@import url\(["'].*["']\);$/gm);
  if (imports) {
    for (const imp of imports) {
      const url = imp.match(/(?<=^@import url\(["'])(.*)(?=["']\);)/)[0];
      const str = await fetch(url);
      css = css.replace(imp, str);
    }
  }
  return minify(css, { restructure: true }).css;
}

async function cssMerge() {
  const files = readdirSync(path).filter((file) => file.slice(-4) === ".css");
  for (const file of files) {
    const filepath = `${path}/${file}`;
    let css = readFileSync(filepath, "utf8");
    const merged = await merge(css);
    writeFileSync(filepath, merged);
  }
}

cssMerge();
