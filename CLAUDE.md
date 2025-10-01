# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 application using Vue 3, Tailwind CSS v4, and i18n for internationalization. The application supports three languages: German (default), English, and Russian.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Generate static site
npm run generate
```

## Architecture

### Framework & Tech Stack
- **Nuxt 4** with Vue 3 and TypeScript
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **i18n** for multilingual support (German, English, Russian)
- **ESLint** with Nuxt's integrated configuration

### Directory Structure
- `app/` - Main application code (Nuxt 4 convention)
  - `app.vue` - Root component with NuxtLayout and NuxtPage
  - `pages/` - File-based routing (index.vue, about.vue)
  - `layouts/` - Layout templates (default.vue with header/footer)
  - `components/` - Reusable components (AppHeader, AppFooter)
  - `assets/css/` - Global styles (main.css)

### Configuration Files
- `nuxt.config.ts` - Main Nuxt configuration
  - Modules: @nuxt/eslint, @nuxt/fonts, @nuxt/scripts, @nuxtjs/i18n
  - i18n configured with default locale "de"
  - Tailwind CSS integrated via Vite plugin
- `eslint.config.mjs` - ESLint configuration (extends Nuxt defaults)

### Key Architecture Patterns
- Uses Nuxt 4's `app/` directory convention (not the older `src/` pattern)
- File-based routing via `app/pages/` directory
- Layout system with default layout wrapping AppHeader, content slot, and AppFooter
- Scoped styles in Vue components
- i18n locale files should be in `app/locales/` directory (to be created when needed)

### Styling
- Tailwind CSS v4 is integrated via Vite plugin
- Global styles in `app/assets/css/main.css`
- Component-specific styles use `<style scoped>` in SFCs
