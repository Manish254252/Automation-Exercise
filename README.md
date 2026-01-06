### ![Playwright Tests](https://github.com/Manish254252/Automation-Exercise/actions/workflows/playwright.yml/badge.svg)
### ![Playwright CI Badge](https://gist.githubusercontent.com/Manish254252/7d78878ad83404cf032c94012ddc4fb7/raw/<hash>/ci-badge.svg)



# Automation-Exercise Test Framework 🧪

A full-fledged **Playwright Test Automation Framework** for both **UI and API testing** of the AutomationExercise website.

The project includes:
- UI tests using Playwright and Page Object Model
- API tests using Playwright’s APIRequestContext
- Environment configuration
- Allure reporting with meaningful steps
- Logging and structured test data
- Reusable utilities and test helpers

---

## 🧠 About the Project

This repository contains automated test scripts for various user flows and API endpoints of a demo e-commerce website (AutomationExercise
) — a site built for automation practice across UI and API.

The framework is designed for scalability, maintainability, and clarity, and follows best practices including:

Page Object Model (POM) for UI tests

Environment-based configurations for multiple base URLs

Reusable API clients for consistent request handling

Logging for debugging and traceability

JSON schema validations for API responses

Allure reporting with meaningful test steps using test.step()
## ✅ Base URLs
| Environment        | Base URL                                      |
| ------------------ | --------------------------------------------- |
| Beeceptor Mock API | `https://json-placeholder.mock.beeceptor.com` |
| Dummy JSON API     | `https://dummyjson.com`                       |

## ✅ Tested API Endpoints

| Feature                 | Endpoint          | Method | Base URL Environment |
| ----------------------- | ----------------- | ------ | -------------------- |
| Fetch all users         | `/users`          | GET    | Bee / Dummy          |
| Fetch posts             | `/posts`          | GET    | Bee                  |
| Login                   | `/login`          | POST   | Bee                  |
| Create account / signup | `/signup`         | POST   | Dummy                |
| Logout                  | `/logout`         | POST   | Dummy                |
| Delete account          | `/delete-account` | DELETE | Dummy                |


---

## 📦 Features

✔ UI automation tests organized by meaningful test flows  
✔ API automation using request contexts and reusable API client  
✔ Configurable base URLs and headers for multiple environments  
✔ Meaningful test steps using `test.step` for readable reports  
✔ Allure report integration for detailed visualization  
✔ Test data loader for JSON⁄fixtures driven testing  
✔ JSON schema validation for API responses  
✔ Cross-browser executions with Playwright

---

## 📁 Project Structure
      root/
      ├── .github/
      ├── tests/
      │ ├── specs/
      │ └── ... (UI & API tests)
      ├── pages/
      │ └── *.ts (Page Objects)
      ├── utils/
      │ ├── ApiUtils.ts
      │ ├── Logger.ts
      │ ├── env.ts
      │ ├── SchemaValidator.ts
      │ ├── TestDataLoader.ts
      │ └── Misc.ts
      ├── schemas/
      │ └── *.schema.json
      ├── test-data/
      │ └── *.json
      ├── allure-results/
      └── playwright.config.ts


---


## 🚀 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Manish254252/Automation-Exercise.git
cd Automation-Exercise
```
### 2. Install dependencies
```
npm install
```
### 3. Install Playwright browsers
```
npx playwright install
```
### 4. Run all tests
```
npx playwright test
```

## 📊 Allure Reporting

### The framework integrates Allure Reporting with meaningful test steps.

### Generate Allure Report
```
npx allure generate allure-results --clean -o allure-report
```

### Open Allure Report
```
npx allure open allure-report
```
## 📊 Test Execution Reports

All automated test execution reports are generated and published automatically using **GitHub Actions**.

### 🔹 Latest Reports (GitHub Pages)

- 🟢 **Playwright HTML Report**  
  👉 https://manish254252.github.io/Automation-Exercise/playwright/

- 🟣 **Allure Report**  
  👉 https://manish254252.github.io/Automation-Exercise/allure/

### 📌 Notes
- Reports are updated automatically on every push to the **master** branch.
- Reports include:
  - Test execution status
  - Screenshots & videos (on failure)
  - API logs and attachments
- For pull requests, reports are available as **GitHub Action artifacts**.



