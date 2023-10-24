## Startup

- **Dependency Installation**: `yarn`
- **Start Project Locally**: `yarn dev`
- **For Login, Run**: `yarn mock`
  - Without this, login won't be possible.

## Cross-Domain

- **Local Proxy**:

  ```json
  server: {
    port: 3001,
    proxy: {
      "/XXX": {
        target: "https://XXX",
        changeOrigin: true,
        cookieDomainRewrite: "",
        secure: false
      }
    }
  }


## package.json 文件配置

```
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "serve": "vite preview",
    "lint": "npm run lint:js && npm run lint:style && npm run lint:prettier",
    "lint:js": "eslint --cache --ext .js,.jsx,.ts,.tsx --format=pretty ./src",
    "lint:prettier": "prettier --check \"**/*\" --end-of-line auto",
    "lint:style": "stylelint --fix \"src/**/*.less\" --syntax less",
    "lint-staged": "lint-staged",
    "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {
    "*.less": "stylelint --syntax less",
    "*.{js,jsx,ts,tsx}": "npm run lint-staged:js",
    "*.{js,jsx,tsx,ts,less,md,json}": [
      "prettier --write"
    ]
  }
}

```

## json-server mock data

- yarn add json-server -D
- at the terminal
  ```
  mkdir mock
  cd mock
  touch db.json
  ```
- add in  package.json's  scripts

  ```
  "mock": "json-server mock/db.json --port 3008"
  ```

- Then run the command yarn mock to access the interface data configured in db.json from the console.
