# @near-kit-tool-box

A monorepo containing three packages for NEAR Kit development:

- **@near-kit-tool-box/web** - Browser-specific NEAR client setup with Hot Wallet Connect
- **@near-kit-tool-box/env** - Backend/environment NEAR client setup with .env support
- **@near-kit-tool-box/fun** - Reusable contract functions for common NEAR contracts

## Quick Start

```bash
bun install
bun run build
```

## Packages

| Package | Description |
|---------|-------------|
| `@near-kit-tool-box/web` | Browser client with localStorage network switching |
| `@near-kit-tool-box/env` | Backend client with environment variable configuration |
| `@near-kit-tool-box/fun` | Contract functions (greeting, Rhea/Ref, FT, wrapNEAR) |

## Development

```bash
# Build all packages
bun run build

# Build specific package
bun run build:web
bun run build:env
bun run build:fun

# Run TypeScript check
bun run tsc --noEmit
```

## Publishing

Each package can be published independently:

```bash
# Login to npm
bunx npm login

# Publish all packages
bun run publish:all

# Or publish individual packages
cd packages/web && bun publish --access public
cd packages/env && bun publish --access public
cd packages/fun && bun publish --access public
```

## Version Management

Update versions in each package's `package.json` before publishing. Each package has its own version and can be published independently.

copyright 2026 by sleet.near
