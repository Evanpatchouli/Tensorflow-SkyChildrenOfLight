# 光遇复刻档案馆

## 介绍
光遇复刻档案馆，记录历史复刻，采用Tensorflow.js作为机器学习引擎，对历史复刻数据样本进行深度学习，并预测下一期可能要复刻的先祖，预测结果仅供娱乐

## 技术栈

Vue 3、TypeScript、Vue Router、Vite、Dart Sass、Element Plus 和 TensorFlow.js。

## 本地开发

使用 Node.js 22.13 或更新的 22.x 版本，或 Node.js 24 及更新版本。

```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

生产构建输出到 `dist/`，部署和预览的基础路径为 `/TensorflowSkyPredict.github.io/`。

修改档案后，运行 `npm run data:generate` 更新预测数据。CI 使用 `npm run data:check` 核对生成数据，使用 `npm run data:test` 进行回测回归测试。要在本地检查构建页面，可先运行 `npx playwright install chromium --only-shell` 安装 Chromium，再运行 `npm run smoke:static`。

## 参与贡献
如果您对界面UI有更好的想法，或是愿意改善训练算法，欢迎加入维护本项目  
Fork本仓库并且提出pull request，如果你的确做出了很棒的改进我将会接受
