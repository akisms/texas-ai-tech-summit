# From Chat to Code — The 3 Levels of AI

An interactive workshop presentation by [Ayman Kotob](https://atmitlabs.ai), founder of **Atmit Labs**, delivered at the **Texas AI Tech Summit**.

A beginner-friendly journey through three levels of working with AI, using the Claude ecosystem as the framework:

1. **Chat** — *Ask*, and it answers (Claude)
2. **Cowork** — *Delegate*, and it acts for you (Claude Cowork)
3. **Code** — *Describe it*, and it builds (Claude Code)

## Running it

It's a single self-contained HTML file. Either:

```bash
# Option A: just open it
open index.html

# Option B: serve it locally
node server.js   # then visit http://localhost:3000
```

## Presenting

- Press **P** to enter presentation mode
- **← / →** (or scroll) to move between slides
- **Esc** to exit

## Editing the deck

The whole talk lives in [`deck.js`](deck.js) — one block per slide, in order. `index.html` is the engine that draws it; you don't edit that.

In `deck.js` you can:
- **Change words** — edit the text inside the quotes.
- **Remove a slide** — delete its whole `{ ... }` block.
- **Reorder** — move a block up or down.
- **Add a slide** — copy a block of the same `type`, paste, edit.
- **Toggle elements** — e.g. on the About slide set `ribbon: false` to hide the chip on the photo.

Optional emphasis in any text: `*word*` (brand color), `**word**` (bold), `_word_` (italic).

The one rule: **keep the quotes and the commas.** A missing quote or comma is the usual cause of a problem. If something's off, the deck shows a red bar at the top naming the likely fix instead of going blank, and you can always roll back with git.

## Built with

Plain HTML and CSS, no build step. Brand palette and typography follow the Atmit Labs brand system.

---

*Automation and tech, made intuitive.* — [Atmit Labs](https://atmitlabs.ai) · hello@atmitlabs.ai
