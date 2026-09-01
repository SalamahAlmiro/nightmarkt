# nightmarkt

React frontend for a marketplace web application. Talks to the [NightMarkt-API](https://github.com/SalamahAlmiro/NightMarkt-API) API.

## Features

- JWT-based authentication (login/register), with the token attached to every API request automatically
- Protected routes — unauthenticated users are redirected to login
- Product listings rendered in a virtualized, responsive grid (`react-window`) that stays smooth with large catalogs
- Full product CRUD (add, edit, delete) with category selection
- Live updates — new products appear for all connected users in real time via Socket.IO, no refresh needed

## Tech stack

React 19, Vite, Tailwind CSS, React Router, Axios, Socket.IO client, react-window, react-select


## Getting started

```bash
npm install
cp .env.example .env   # point this at your running marketplaceb instance if not localhost
npm run dev
```

Requires [marketplaceb](https://github.com/SalamahAlmiro/marketplaceb) running for the app to have data to display.

## Project structure

```
src/
  components/   Shared UI (header, sidebar, protected route wrapper)
  context/      Auth context (token + user state)
  features/     Product-related API calls and components
  pages/        Route-level pages (login, register, product CRUD)
  services/     Axios client and auth service functions
```
