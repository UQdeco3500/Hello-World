## 启动

- 依赖安装：yarn
- 本地启动项目：yarn dev
- 要登陆需要运行：yarn mock
- 不然无法登陆

## 跨域

- 本地代理
  ```
  server: {
  port: 3001,
  proxy: {
   "/XXX": {
     target: "https://XXX",
     changeOrigin: true,
     cookieDomainRewrite: "",
     secure: false,
     },
   },
  },
  ```

## package.json 文件配置

```
 "scripts": {
 "dev": "vite",
 "build": "tsc && vite build",
 "serve": "vite preview",
 // 主要配置 触发pre-commit 进行elint stylelint 格式校验
 "lint": "npm run lint:js && npm run lint:style && npm run lint:prettier",
 "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
 "lint:prettier": "prettier --check "**/*" --end-of-line auto",
 "lint:style": "stylelint --fix "src/**/*.less" --syntax less",
 "lint-staged": "lint-staged",
 "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx "
 },
 // 使用yorkie 来自动触发识别 gitHooks这个钩子，然后执行pre-commit 然后在执行lint-staged
 "gitHooks": {
 "pre-commit": "lint-staged"
 },
 // lint-staged 配置 校验less,ts,tsx等文件有无不规范写法
 "lint-staged": {
 "*.less": "stylelint --syntax less",
 "*.{js,jsx,ts,tsx}": "npm run lint-staged:js",
 "*.{js,jsx,tsx,ts,less,md,json}": [
   "prettier --write"
   ]
 },
```

## json-server mock 数据

- yarn add json-server -D
- 在终端
  ```
  mkdir mock
  cd mock
  touch db.json
  ```
- 在 package.json 中的 scripts 中添加

  ```
  "mock": "json-server mock/db.json --port 3008"
  ```

- 然后运行命令 yarn mock 就可以在控制台成功访问到在 db.json 中配置的接口数据了
