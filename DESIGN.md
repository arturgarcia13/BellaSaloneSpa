# Design: BELLA Salon & Spa

## Mode

Persuade (marketing landing page).

## Concept Card

- Idea: A warm, lit vanity studio. The site feels like golden hour falling across plaster — intimate, breathable, and precise.
- Metaphor: Soft-focus portrait studio; cream plaster walls, terracotta lacquer, a single moving ribbon of warm light.
- Signature: A scroll-driven warm light band that travels down the page, shifting section emphasis; soft clip-reveal intros that settle, never bounce.
- Emotion: Anticipatory calm luxury — “I want to be there.”
- Motion verb: Settle like warmed cream. Exponential ease-out; nothing snaps.
- Screenshot: Hero with “Você já se sentiu Bella hoje?” over a sand-to-blush gradient, narrow terracotta booking button, quiet edge marks reading Meireles · Aldeota · Fortaleza.

## Site URL / production

https://bellasalonespa.pages.dev (placeholder until real domain)

## Tokens

Palette (roles):
- `--bg` #FBF8F4 (warm plaster)
- `--paper` #F2E9DD (card surface)
- `--ink` #2D231E (coffee)
- `--muted` #7A6F68
- `--brand` #5C4033 (cocoa)
- `--cta` #8C4A32 (terracotta)
- `--cta-hover` #743926
- `--accent` #C5A880 (champagne)
- `--line` #E5D9C9
- `--glow` #C48B57

Type:
- Display: `Cormorant Garamond` (300/400/500/600/700), serif, negative tracking -0.015em to -0.02em.
- UI/body: `Plus Jakarta Sans` (300/400/500/600/700/800), tracking 0.01em; buttons uppercase with 0.08em.

Scale (fluid):
- `--text-display`: clamp(2.6rem,6vw,4.6rem)
- `--text-h2`: clamp(1.9rem,3.6vw,3rem)
- `--text-h3`: clamp(1.3rem,2.2vw,1.75rem)
- `--text-body`: clamp(1rem,1.05vw,1.1rem)
- `--text-small`: 0.85rem

Spacing:
- Section rhythm: clamp(96px,11vw,168px) vertical.
- Container max 1180px, padding-inline clamp(20px,5vw,48px).

Shape:
- Radius: 12px cards; 999px only for small pills. No nested cards.
- Shadows: one soft depth — 0 24px 48px -28px rgba(45,35,30,.28).

Motion:
- Ease: cubic-bezier(.16,1,.3,1) (Expo out).
- Durations: 0.7s enters, 0.4s hovers; scroll scrub smoothness 1.2.
- One scroll-linked band; reveals staggered 40ms. Reduced motion disables scroll smoothing, scrub and transforms.

## Composition plan

1. Nav (fixed, translucent, minimal marks).
2. Hero — split studio: left copy stack; right atmospheric CSS panel (gradient + drifting light ribbon).
3. Rituais em destaque — hairline-divided service index, four rows, alternating alignment.
4. Experiência BELLA — deep cocoa band, pull quote, three value pillars.
5. Prova & presença — honest proof: events participation + placeholder-ready result frames without fabricated quotes.
6. Unidades & contato — two location cards, hours, phone, direct route/booking links.
7. Footer — brand, nav, legal light.

Different layout family per major section: split / index / full-bleed band / two-column / footer.

## Copy principles

- No em dashes. No invented testimonials, prices or client wins beyond documented facts.
- Portuguese (Brazil).
- Buttons name action: “Agendar meu horário”.

## Genericness check

- Cream+terracotta trap avoided by making the hero a light study rather than a centered gradient blob and by refusing default cards. The palette is brand-locked from the provided identity, but expression (split hero, index services, cocoa band, location cards) is brand-specific.

## Asset policy

No real photography is available. Visuals are CSS surfaces, light bands and type. Any future media is dropped into `src/assets` and referenced; no fake screenshots or invented clients.
```

Oops I accidentally added weird Path lines. Remove those. Let's rewrite clean.<|end|><|start|>start<|channel|>xml<|message|><rfl:parameter name="path">
/home/arturgarcia/PROJECTS/lp_bellasalonespa/DESIGN.md