import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const [root, basePath] = process.argv.slice(2);

async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await rewrite(path);
      continue;
    }
    if (entry.name.endsWith(".css")) {
      let css = await readFile(path, "utf8");
      css = css.replaceAll("url('/", `url('${basePath}/`);
      css = css.replaceAll('url("/', `url("${basePath}/`);
      css = css.replaceAll("url(/", `url(${basePath}/`);
      await writeFile(path, css);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    let html = await readFile(path, "utf8");
    html = html.replace(/<script\b(?![^>]*src=["']https:\/\/js\.stripe\.com\/v3\/buy-button\.js["'])[^>]*>[\s\S]*?<\/script>/gi, "");
    html = html.replaceAll('href="/', `href="${basePath}/`);
    html = html.replaceAll('src="/', `src="${basePath}/`);
    await writeFile(path, html);
  }
}

await rewrite(root);
