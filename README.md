# Boomash

Admin dashboard with a dark/orange theme. Built with Laravel 11 + Inertia.js + Vue 3.

## Stack

Laravel 11 / Jetstream / Sanctum / Vue 3 / Bootstrap 5 / Vite

## Modules

- **Dashboard** - overview with revenue charts, orders, customers
- **Analytics** - sessions, audience metrics, top pages
- **Chat** - messaging interface
- **Tasks** - kanban board + list view
- **Calendar** - events + month grid
- **Profile** - account settings, 2FA

## Getting Started

```
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run build
php artisan serve
```

For development with hot reload: `npm run dev`
