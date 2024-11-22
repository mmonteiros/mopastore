# Application Setup Guide

This document provides instructions to set up and run the Next.js application with Firebase integration.

---

## Prerequisites

Before you begin, ensure your system meets the following requirements:

- **Node.js:**
  Install from [Node.js](https://nodejs.org/).

- **npm** or **yarn:** Required for managing packages.  
  npm is installed with Node.js, or install Yarn using:  
  ```bash
  npm install --global yarn
  ```

---

## Setting Up the Application

Follow these steps to get the application up and running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mmonteiros/mopastore.git
   cd your-repo
   ```

2. **Install dependencies**:
   Run the following command to install the required packages:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file in the root directory and add the following Firebase configuration values:

   ```plaintext
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
   ```

4. **Start the development server**:
   Run the following command to start the local development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   Access the application at `http://localhost:3000`.

---

## Running the Application

1. **Development environment**:
   Start the application in development mode:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

2. **Build for production**:
   Create an optimized production build:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

3. **Start in production mode**:
   Run the application using the production build:
   ```bash
   npm run start
   ```
   or
   ```bash
   yarn start
   ```

---

## Troubleshooting

1. **Environment variable issues**:  
   Ensure the `.env.local` file is created in the root directory and matches the provided template.

2. **Dependency errors**:  
   Run `npm install` or `yarn install` again to ensure all dependencies are correctly installed.

3. **Firebase initialization issues**:  
   Check the Firebase configuration in the `.env` file and ensure the project credentials are correct.

---
