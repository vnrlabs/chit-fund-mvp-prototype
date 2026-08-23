# ChitFlow — MVP HTML Prototype

Static front-end prototype for the MVP scope of the Chit Fund Platform.

## Run

Because the prototype is plain HTML/CSS/JavaScript, you can either open `index.html` directly or run a small local server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

- `dashboard.html` — MVP operations dashboard
- `chits.html` — chit list, create/review, overview/month history, chit member view
- `members.html` — member directory, creation, bank/UPI/payment preferences, Member 360
- `calculator.html` — CALC-S1/S2/S3 strategy selection, Owner Chit modifier, simulation
- `auction.html` — monthly auction, bid register, standardized calculation trace, monthly payment view
- `payments.html` — collections, delinquency visibility, manual/reference-based winning payout
- `css/` — shared design tokens, layout, components, module styles
- `js/layout.js` — shared header/sidebar/footer; HTML modules do not duplicate application chrome
- `js/common.js` — shared tabs, formatting, search and modal helpers
- `js/data.js` — prototype sample data
- module JS files — page-specific interaction only

## MVP boundaries

Intentionally excluded: automated WhatsApp/SMS/push, interest workflow, member app, advanced configuration/audit screens, payment gateway integration, automated bank payout, ERP/accounting integration and analytics beyond the MVP operations dashboard.

## Note

Calculator formulas in this prototype illustrate UI behavior only. Production logic must use approved strategy semantics, golden examples, explicit rounding rules and versioned deterministic calculation logic.
