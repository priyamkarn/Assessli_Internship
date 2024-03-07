This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Project Documentation

## Project Setup Instructions
1. Clone the repository to your local machine.
2. Ensure you have Node.js and npm installed on your machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install project dependencies.

## How to Run the Project Locally
1. After setting up the project, run `npm start` in the terminal.
2. The React application will start and open in your default web browser.

## Details on Google Sheets Integration
- The project integrates with Google Sheets using the "API Spreadsheets" service.
- Upon form submission, the data is sent to the specified Google Sheets endpoint using a POST request.
- Ensure that the Google Sheets API endpoint is correctly configured and accessible.

## Additional Features or Customizations Implemented
1. **Form Validation**: Implemented client-side form validation to ensure that required fields are filled and email format and phone number format are correct.
2. **Error Handling**: Errors are displayed below the respective input fields to indicate validation errors to the user.
3. **Form Submission**: The form data is sent to the Google Sheets API endpoint upon successful validation.
4. **Reset Form**: After successful submission, the form fields are reset to empty values.

## Code Comments
```javascript
// Code comments are embedded within the code itself for better understanding.
