# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Development vs Production API URL

During local development, use: inside .env --refer .env.example to fill .env files

VITE_API_URL=http://localhost:5000

This allows the frontend running on localhost to communicate with the backend running locally.

After deploying the backend on Render, update the frontend environment variable:

VITE_API_URL=https://your-backend-url.onrender.com

Example:

VITE_API_URL=https://jobportal-backend-ibpj.onrender.com

Important:

- Use localhost:5000 only while developing locally.
- Deploy the backend first.
- After obtaining the backend deployment URL, update VITE_API_URL.
- Rebuild and redeploy the frontend after changing the environment variable.

All API calls should use:

const BASE_URL = import.meta.env.VITE_API_URL;

Example:

fetch(`${BASE_URL}/login`)
fetch(`${BASE_URL}/signup`)
fetch(`${BASE_URL}/post-job`)
fetch(`${BASE_URL}/all-jobs`)
fetch(`${BASE_URL}/my-jobs/${email}`)

Do not hardcode URLs such as:

http://localhost:5000/login
http://localhost:5000/signup
http://localhost:5000/post-job

Deployment Flow:

1. Clone the repository.

2. Create frontend/.env

VITE_API_URL=http://localhost:5000

3. Run locally and test all features.

4. Deploy the backend on Render.

5. Copy the deployed backend URL.

Example:

https://jobportal-backend-ibpj.onrender.com

6. Update frontend/.env

VITE_API_URL=https://jobportal-backend-ibpj.onrender.com

7. Run:

npm run build

8. Redeploy the frontend.

This approach avoids changing source code during deployment and only requires updating the environment variable.
