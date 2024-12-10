# Automation Eyebuydirect - Playwright

Automation Eyebuydirect - Playwright
This repository contains automation scripts for web testing on "https://www.eyebuydirect.com/" website using Typescript, Playwright.

### Test Case

1. Login Valid (Validation of Account)
2. Login Invalid (Validation on Email)
3. Filters (Ensure that the use of one or more filters retrieves the correct data)
4. Wishlist (Ensure functionality of add and remove wishlist)

### Features

1. Take a screenshot of each test case and organize them into separate folders based on the test case.
2. Allure Report

### Commands

Runs the end-to-end tests

```bash
  npx playwright test
```

Starts the interactive UI mode

```bash
  npx playwright test --ui
```

Runs the tests only on Desktop Chrome

```bash
  npx playwright test --project=chromium
```

Runs the tests in a specific file

```bash
  npx playwright test example
```

Runs the tests in debug mode

```bash
  npx playwright test --debug
```

Auto generate tests with Codegen

```bash
  npx playwright codegen
```

### Make Allure Report

Allure Documentation

```bash
  https://github.com/allure-framework/allure-js/blob/main/packages/allure-playwright/README.md
```

Install allure-playwright using a package manager

```bash
  npm install -D allure-playwright
```

Make allure reporter via the command line

```bash
  npx playwright test --reporter=allure-playwright
```

Install or upgrade Allure Report

```bash
  https://allurereport.org/docs/install/
```

Check Allure version

```bash
  allure --version
```

Generate Allure Report after the tests are executed:

```bash
  allure generate ./allure-results -o ./allure-report
```

Open the generated report:

```bash
  allure open ./allure-report
```

### Command if use configuration in playwright.config.ts

Change this parameter on defineConfig

```bash
  reporter: [["html"],["allure-playwright"]],
  use: {
    trace: 'on-first-retry',
    screenshot: "only-on-failure",
    video: "on"
  },

```

Run test

```bash
  npx playwright test
```

Generate Allure Report after the tests are executed:

```bash
  allure generate ./allure-results -o ./allure-report --clean
```

Open Allure Report

```bash
  allure open ./allure-report
```
