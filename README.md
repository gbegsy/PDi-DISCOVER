# PDi DISCOVER Prototype

An editable, browser-based operational learning and investigation prototype.

## What it demonstrates

- The D–I–S–C–O–V–E–R investigation workflow
- AI-assisted first drafts for causes, 5 Whys and operational reality
- Context-sensitive barrier and Life-Saving Rule suggestions
- Organisational and Human Factors prompts
- Recommendations linked to barriers and effectiveness evidence
- Quality gate and executive report generation
- Local browser save/load and portable JSON case files

## Open locally

Open `index.html` in Microsoft Edge or Google Chrome. No installation is required.

For a guided demonstration:

1. Select **Load worked example**.
2. Select **AI Assist**.
3. Select **Analyse and populate**.
4. Review the DISCOVER Workflow, Quality Gate and Executive Report.

## Important prototype limitation

The current AI Assist is a transparent browser-based reasoning prototype. It does not send information to an external AI model. Its output is an editable hypothesis and must be checked against evidence by a competent investigator.

A future live-AI version should use a secure server-side connection. Never embed an API key in `index.html`.

## GitHub Pages

The project can be published directly from this folder because `index.html` is self-contained. A GitHub Pages workflow can upload this folder as the site artifact.

## Verification

Run:

```bash
npm test
```

The checks confirm that the HTML, key workflow screens, AI functions and safety notices are present.
