# Orca VPS setup

This directory contains the production prompt for a review-gated admissions monitoring agent. The agent researches official sources and opens pull requests; it never merges or deploys.

## Recommended schedule

Run the automation Monday, Wednesday, and Friday at 7:15 a.m. in `America/New_York`. Increase to weekdays during October–February if admissions pages are changing frequently.

## VPS requirements

- a maintained Orca installation;
- Git and Node.js 22 or newer;
- a checkout of `alindgren/jersey-city-high-school-guide`;
- GitHub authentication that can create branches and pull requests but cannot bypass branch protection or merge;
- outbound HTTPS access to the official source sites and GitHub;
- the repository path as the Orca folder context;
- `ops/orca/admissions-watch.prompt.md` as the automation prompt.

Use the version-matched Orca instructions on the VPS before configuring the automation:

```text
orca skills get orca-cli --json
```

Then use the automation commands documented by that installed Orca version. Do not copy command syntax from another Orca release.

## GitHub permissions

Prefer a dedicated GitHub App or fine-grained token limited to this repository with:

- Contents: read and write
- Pull requests: read and write
- Metadata: read

Do not grant administration, secrets, workflow-management, or merge-bypass permission. Store the credential in the VPS secret manager or Orca's supported secret store, never in this repository or in the automation prompt.

## Guardrails

- Protect `main` and require the `Validate site` check before merge.
- Require owner review for every admissions change.
- Enable Cloudflare preview builds for non-production branches so each pull request receives a preview URL.
- Keep the public deployment connected only to `main`.
- Preserve logs for research runs and pull-request creation, but never log credentials.
