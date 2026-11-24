import assert from "node:assert/strict";
import { chromium, devices } from "playwright";
import { preview } from "vite";

const base = "/TensorflowSkyPredict.github.io/";
const pages = [
  ["", "Start"],
  ["skypre/", "历史复刻"],
  ["skypre/prediction/", "下期预测"],
  ["skypre/experiment/", "模型实验"],
];

const server = await preview({
  appType: "mpa",
  build: { outDir: process.argv[2] ?? "dist" },
  preview: { host: "127.0.0.1", port: 0 },
});

try {
  const { address, port } = server.httpServer.address();
  const origin = `http://${address}:${port}`;
  const browser = await chromium.launch();

  try {
    for (const [path, title] of pages) {
      const page = await browser.newPage(devices["iPhone 13"]);
      const failures = [];
      const requestedPaths = [];

      page.on("pageerror", (error) => failures.push(error.message));
      page.on("request", (request) => {
        const url = new URL(request.url());
        if (url.origin === origin) requestedPaths.push(url.pathname);
      });
      page.on("requestfailed", (request) => failures.push(request.url()));
      page.on("response", (response) => {
        if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
      });

      const url = `${origin}${base}${path}`;
      const content = path
        ? page.getByRole("heading", { name: title, exact: true })
        : page.getByText(title, { exact: true });

      const response = await page.goto(url);
      assert.equal(response?.status(), 200, `Direct visit failed at ${url}`);
      await content.waitFor({ timeout: 10_000 });

      const reloaded = await page.reload();
      assert.equal(reloaded?.status(), 200, `Reload failed at ${url}`);
      await content.waitFor({ timeout: 10_000 });
      assert.deepEqual(failures, [], `Page errors at ${url}`);
      assert.ok(requestedPaths.every((request) => request.startsWith(base)), `Asset escaped production base at ${url}`);
      assert.ok(
        requestedPaths.every((request) => !/(?:skypre-model|tfjs-vis)/i.test(request)),
        `Model assets loaded before an experiment action at ${url}`,
      );

      await page.close();
      console.log(`Opened and reloaded ${base}${path}`);
    }
  } finally {
    await browser.close();
  }
} finally {
  await server.close();
}
