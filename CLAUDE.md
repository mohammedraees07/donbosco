## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Responsive & Media Standard

All components built for this project MUST adhere strictly to the following responsive design principles:
- **Mobile-First CSS**: Use responsive units (rem, vw, %) instead of fixed pixels where possible to ensure fluid scaling.
- **Breakpoints**: Provide robust media queries for desktop, tablet (max-width: 992px), and mobile (max-width: 768px).
- **Usability**: Ensure all touch targets (buttons, links, carousel arrows) have a minimum dimension of 44x44px.
- **Layout Adjustments**: On mobile, stack multi-column layouts into single columns (or 2x2 grids where appropriate), stack text and images vertically, and convert horizontal navigations to animated hamburger menus.
- **No Overflow**: Ensure absolutely no horizontal scrolling occurs at any breakpoint.
- **Media Organization**: All dynamically fetched or WordPress-scraped media (images, videos) MUST be placed in dedicated folders inside `/public` that match the component's logical layer (e.g., `/public/testimonials/`, `/public/facilities/`, `/public/news/`). Always use `loading="lazy"` and responsive dimensions for optimal performance.
