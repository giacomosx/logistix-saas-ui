# SaaS Application Frontend

## Overview

This project is currently under development and has not yet released a stable version. The current development phase focuses on **Request for Quote (RFQ) Management**.

This repository contains the source code for the **frontend** of a multi-tenant SaaS application. Built using **Next.js**, the project ensures high performance, scalability, and optimal user experience. This frontend integrates seamlessly with the backend and database to provide a modular platform for companies and professionals offering logistics services and other sectors.

---

## Features

### Current Features Under Development
- **Request for Quote (RFQ) Management:** Dashboard for creating, viewing, and updating RFQs with statuses such as *Pending*, *Resolved*, and *In Progress*.

### Planned Features
- **Authentication and Authorization:** Login/logout functionality, route protection, and user role management.
- **Quote Management:** Ability to generate, track, and update outgoing quotes linked to incoming RFQs.
- **Client and Vendor Management:** A comprehensive directory to manage clients (each with a list of associated quotes) and vendors.
- **Service Customization:** Creation and customization of services that can be referenced in the quote module to automate workflows.
- **Responsive User Interface:** Designed for seamless use across desktops and mobile devices.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** Redux Toolkit (if needed for global state management)
- **API Calls:** Axios

---

## Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<frontend-repo-name>.git
   cd <frontend-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables by creating a `.env.local` file in the project root with the following values:
   ```env
   NEXT_PUBLIC_API_URL=<Your-API-URL>
   NEXT_PUBLIC_SUPABASE_URL=<Supabase-URL>
   NEXT_PUBLIC_SUPABASE_KEY=<Supabase-Key>
   ```

### Running Locally

To start the development server:
```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

- **`npm run dev`**: Starts the application in development mode.
- **`npm run build`**: Builds the project for production.
- **`npm run start`**: Runs the built application in production mode.
- **`npm run lint`**: Lints the code for issues.

---

## Project Structure

```
├── App               # Routes and pages
    ├── (public)      # Main public pages
    ├── dashboard     # Main private pages
├── components        # Reusable components
├── hooks             # Custom react hooks
├── lib               # Data informations
├── utils             # Helper and utility functions
├── public            # Static files (e.g., images, fonts)
├── .env.local        # Environment variables
└── README.md         # Project documentation
```

---

## Contributions

Contributions, issues, and suggestions are welcome! Feel free to open an issue or create a pull request.

1. Fork the repository.
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/<feature-name>
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature/<feature-name>
   ```
5. Create a pull request to the main branch of the original repository.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

