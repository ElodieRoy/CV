# WorkFlow CI/CD

The main branch is protected on GitHub.

To push on it, here you will find the 3 rules:
- Forbidden to push directly without a Pull Request (PR),
- PR must be checked by code review,
- All tests from CI/CD must succeed before merging the PR into the main branch.

If any of these conditions are not met, the merge will be blocked until all criteria are satisfied.

## Workflow Overview

The CI/CD pipeline is designed to ensure that all changes to the codebase are properly tested and reviewed before being merged into the `main` branch. This workflow involves the following steps:

### 1. **Creating a Pull Request (PR)**
   - All changes must be made in a separate branch, and a Pull Request (PR) should be opened to propose the changes to the `main` branch
   - The branch must be up to date with `main` (no conflicts)
   - The PR will automatically trigger the CI pipeline to build and test the code.
   

### 2. **Code Review**
   - Once the PR is opened, the code must undergo a **code review**.
   - At least one reviewer (or more, depending on the repository settings) must approve the PR before it can be merged.
   - The review process ensures that code quality, best practices, and security standards are maintained.

### 3. **CI/CD Pipeline**
Every time a PR is created or updated, the CI/CD pipeline is triggered using GitHub Actions. 


## How to Trigger the CI/CD Pipeline

- The pipeline is automatically triggered by the following events:
  - **Push to any branch** (except `main`) will run the tests and build process.
  - **Pull Request creation or update** will trigger the CI pipeline to validate the code before it can be merged.

## Best Practices

- Always ensure that your feature branches are **up-to-date** with the latest `main` branch before opening a PR.
- Keep PRs focused on a single change or feature to facilitate quicker reviews and better traceability.
- Make sure that all tests pass before submitting the PR for review to avoid unnecessary delays.

## Troubleshooting

- If your PR fails any of the tests or checks, check the logs from the CI/CD pipeline to identify the cause.
- Ensure that all dependencies are correctly installed and that there are no conflicts in your branch with the `main` branch.
- If you encounter issues with GitHub Actions, check the workflow configuration files (`.github/workflows/*.yml`) for errors.

---

By following this workflow, we ensure that all code changes are thoroughly tested, reviewed, and properly integrated into the `main` branch, helping to maintain a high-quality codebase and reducing the risk of introducing bugs.
