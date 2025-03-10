# Elodie-roy.fr

![Licence MIT](https://img.shields.io/badge/license-MIT-blue.svg)
[![Unit tests](https://github.com/ElodieRoy/CV/actions/workflows/development.yml/badge.svg)](https://github.com/ElodieRoy/CV/actions/workflows/development.yml)

This online CV website was designed to showcase my skills and professional experience, emphasizing my web development expertise.

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Launch](#installation-and-launch)
- [License](#license)

---

## Features

- Interactive presentation of skills, projects, and experiences
- Contact form
- Responsive and modern interface
- Easy deployment with Docker
- Multilingual support (🚧 Initiated and currently in progress)

---

## Technologies Used

- **Frontend**: React.js with ViteJS to demonstrate my skills in building modern web applications. (Using Next.js or Astro would have been a better choice for this project to achieve higher performance with Static Site Generation (SSG) and improved SEO)
- **Language**: TypeScript for type safety and better long-term maintenance
- **Styling**: Tailwind CSS because it is modern, fast to configure and use, and ideal for quickly creating responsive designs
- **Data Management**: JSON, the simplicity of the data and the frequency of updates justify the use of these simple files
- **Containerization**: Docker to ensure simpler and isolated deployment

---

## Installation and Launch

### Prerequisites

- [Docker](https://www.docker.com/)
or
- [Node](https://nodejs.org/en)

### Steps

1. **Clone the repository**
  ```bash
   git clone https://github.com/ElodieRoy/CV.git
  ```

2. **Go to 'CV' directory**

3. **Launch application**
- With Docker : start the Docker services
  ```bash
  docker compose up
  ```

- With Node : install all dependency for frontend and backend
  ```bash
  npm run install-all
  npm run start-all
  ```
  /!\ You have to add an `.env` for variable `NODE_ENV=development`and `PORT=8000`and also if you want variable for emailing

4. **Access the site: Open http://localhost:5173 in your browser**

5. **Enjoy!**

---

## License
This project is licensed under the MIT License.
For more details, refer to the [LICENSE](./LICENSE).