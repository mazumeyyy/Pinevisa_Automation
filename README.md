# Pinevisa_Automation

## JavaScript Playwright Automation Setup

1. Install dependencies

```bash
npm install
npx playwright install
```

2. Run tests

```bash
npm test
```

3. Run headed (browser visible)

```bash
npm run test:headed
```

4. See report

```bash
npm run test:report
```

## Sample test location

- `tests/pinevisa.spec.js`

## Notes

- Uses Playwright Test runner (`@playwright/test`).
- Configuration is in `playwright.config.js`.
