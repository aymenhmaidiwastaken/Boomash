<h1 align="center">Boomash</h1>

<p align="center">
  <strong>Full-stack admin dashboard with a dark/orange theme. Built with Laravel 11, Inertia.js, and Vue 3.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/laravel-11-FF2D20.svg" alt="Laravel 11">
  <img src="https://img.shields.io/badge/vue-3-4FC08D.svg" alt="Vue 3">
  <img src="https://img.shields.io/badge/inertia.js-SPA-6C63FF.svg" alt="Inertia.js">
  <img src="https://img.shields.io/badge/bootstrap-5-7952B3.svg" alt="Bootstrap 5">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="MIT License">
</p>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Backend** | Laravel 11, Jetstream, Sanctum |
| **Frontend** | Vue 3, Inertia.js, Bootstrap 5 |
| **Build** | Vite |
| **Auth** | Laravel Jetstream with 2FA support |

## Modules

- **Dashboard** — Overview with revenue charts, orders, and customer stats
- **Analytics** — Sessions, audience metrics, and top pages
- **Chat** — Real-time messaging interface
- **Tasks** — Kanban board with list view
- **Calendar** — Event management with month grid
- **Profile** — Account settings and two-factor authentication

## Getting Started

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+
- MySQL or SQLite

### Installation

```bash
git clone https://github.com/aymenhmaidiwastaken/Boomash.git
cd Boomash
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run build
php artisan serve
```

For development with hot reload:

```bash
npm run dev
```

Visit **http://localhost:8000** in your browser.

## License

MIT
