<div align="center"><a name="readme-top"></a>

<a href="https://kopod.treonstudio.com">
  <img src="https://github.com/user-attachments/assets/6cfe4e80-6965-412f-8bbc-2c31f03829c6" width="120" alt="Kopod Logo">
</a>

# Kopod

Kopod is a technology podcast platform from Indonesia, featuring authentic and insightful conversations about technology, startups, and digital culture. Each episode brings stories, inspiration, and knowledge from Indonesian creators, professionals, and startup founders—delivered in a relatable and community-driven style.

[Official Site][official-site] · [Anchor][anchor] · [Spotify][spotify] · [Soundcloud][soundcloud] · [Feedback][github-issues-link]

[![][share-x-shield]][share-x-link]
[![][share-telegram-shield]][share-telegram-link]
[![][share-whatsapp-shield]][share-whatsapp-link]
[![][share-reddit-shield]][share-reddit-link]
[![][share-linkedin-shield]][share-linkedin-link]

![][image-overview]

</div>
---

## What is Kopod?
Kopod connects the voices of Indonesia's tech ecosystem. We believe that real stories and experiences from the local community can inspire, educate, and broaden the horizons of anyone passionate about the digital world.

- **Mission:** Share knowledge, experience, and inspiration from Indonesia's tech scene in a relevant and accessible way.
- **Vision:** Become the most influential digital platform for the Indonesian tech community.
- **Values:** Authentic, inclusive, humble, and community-focused.

> **"Kopod connects Indonesia’s tech voices—real stories, real people, real impact."**

---

## Tech Stack
- **pnpm** (package manager)
- **Astro** (modern static site generator)
- **React** (UI components)

---

## Project Structure

The project uses a simple Astro structure:

```
/
├── public/
├── src/
│   ├── pages/
│   └── components/
└── package.json
```

- `src/pages/`: Main pages and podcast content
- `src/components/`: Astro/React components
- `public/`: Static assets (images, etc.)

---

## Getting Started

Run the following commands from the project root:

```bash
pnpm install      # Install dependencies
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview the production build
```

---

## Contributing
We welcome contributions from the Indonesian tech community! For visual and brand guidelines, please refer to the following Figma document:

👉 [Brand Guidelines on Figma](https://www.figma.com/) _(request access if you don't have it)_

---

Discover stories, inspiration, and lessons from Indonesia's tech world—only on Kopod.

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

Learn more - Explore more through Astro's official [documentation](https://docs.astro.build).

------
Updated on 21st October 2024

## This update includes:

- Added Tailwind CSS v4 Beta
- Vanialla JS animation on Intro file 

On this version, Tailwind CSS is now beta the alpha version from Tailwind CSS V4, this means that there's no `tailwind.config.mjs` file anymore. From now on, all style will be added on the `css` file. You can find the styles on the `src/styles/global.css` file.


- Astro SEO by @astrolib/seo
This update includes the integration of the Astro SEO package by @astrolib/seo, is an integration that makes managing your SEO easier in Astro projects. It is fully based on the excellent Next SEO library

- Reusable components
This template now includes reusable components, such as the `Text` component:

- Text Component
A flexible and reusable typography component for dynamic text elements. It allows you to:

- Dynamically set the HTML tag (e.g., `h1`, `p`, `span`) via the `tag` prop.
- Apply predefined text styling variants (e.g., `displayXL`, `textMD`) for consistency across your project.
- Add custom classes for additional styling with the `class` prop.

Example usage:
```astro
<Text tag="h1" variant="displayXL" class="text-center">
  Welcome to the new version!
</Text>
```
-----
