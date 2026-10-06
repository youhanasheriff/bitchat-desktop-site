# BitChat Desktop website

The public landing page for [BitChat Desktop](https://github.com/youhanasheriff/bitchat-desktop), an independent native desktop project by Youhana Sheriff following upstream Bitchat.

A lightweight static Astro site with self-hosted typography, original SVG illustrations, and captures of the actual native macOS interface. No analytics, tracking cookies, signup backend, or runtime font/CDN requests.

## Local development

Use Node 22.12+ (developed on Node 24).

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/bitchat-desktop-site/`.

```sh
npm run check
npm run build
npm run preview
```

The static output is in `dist/`. `astro.config.mjs` sets the GitHub Pages URL and repository base path. All public asset links resolve relative to that base. Update both values if hosting on a custom domain.

## Releases and content

Update the version, asset URL, requirements, and signing status together in `src/data/release.ts` when publishing an app release. The page intentionally labels macOS as an **early preview** and Windows/Linux as **coming soon**. The 7.7 MB measurement is the compressed Apple silicon early-preview ZIP download, not the installed app size or a universal binary measurement.

The release is ad-hoc signed and not notarized. This limitation is shown beside the download with first-open instructions. The minimum macOS version in release metadata is a declared deployment target, not proof of testing on every supported OS.

Native screenshots live in `public/screenshots/`. Their [provenance](public/screenshots/PROVENANCE.md) explains the capture setup and fictitious conversation data. They are not evidence of live Bluetooth interoperability.

## Design and interactions

- Warm paper, forest ink, self-hosted Bricolage Grotesque and DM Sans.
- Original mesh illustration and understated signal animation.
- Real screenshot gallery with Daylight/Bubble, Terminal/Terminal, and Graphite/Bubble variants.
- Accessible native FAQ disclosures, mobile navigation, reduced-motion support, skip link, and visible keyboard focus.
- Static HTML rendering; a small local script handles the gallery and mobile menu.

## License

Site code and original assets: [Unlicense](LICENSE). Font licenses and upstream screenshot attribution: [third-party notices](THIRD_PARTY_NOTICES.md).
