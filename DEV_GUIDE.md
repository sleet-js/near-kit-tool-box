# @near-kit-tool-box Development Guide

## Project Structure

```
near-kit-tool-box/
├── packages/
│   ├── web/        # Browser client (Hot Wallet Connect, localStorage)
│   ├── env/        # Backend client (.env configuration)
│   └── fun/        # Reusable contract functions
├── bin/            # CLI test scripts
└── package.json    # Root workspace config
```

This is a **Bun workspace monorepo**. All packages share dependencies and build with TypeScript.

---

## Setup

```bash
# Install all dependencies
bun install

# Build all packages
bun run build
```

---

## Development Workflow

### Build
```bash
# All packages
bun run build

# Individual packages
bun run build:web
bun run build:env
bun run build:fun
```

### Type Check
```bash
cd packages/web && bun run tsc --noEmit
cd packages/env && bun run tsc --noEmit
cd packages/fun && bun run tsc --noEmit
```

---

## Adding Dependencies

Each package is **independent** with its own `package.json`. Add dependencies to the specific package that needs them:

```bash
# Add to specific package
cd packages/web && bun add <package>
cd packages/env && bun add <package>
cd packages/fun && bun add <package>

# Add dev dependency
cd packages/web && bun add -d <package>

# Update dependencies
bun update
bun update --latest
```

### Common Dependencies by Package

| Package | Key Dependencies |
|---------|-----------------|
| **web** | `@hot-labs/near-connect`, `near-kit`, `zod` |
| **env** | `near-kit`, `dotenv`, `zod` |
| **fun** | `near-kit`, `@sleet-js/*-methods-const`, `zod` |

All packages use:
- **peerDependencies**: `typescript ^6.0.2`
- **devDependencies**: `@types/bun`
- **Build tool**: TypeScript compiler (`tsc`)

---

## Package Configuration

Each package's `package.json` includes:
- **Entry points**: `dist/index.js` (main/module), `dist/index.d.ts` (types)
- **files**: Only `dist/**/*`, `README.md`, `LICENSE` are published
- **publishConfig**: `access: public`

### TypeScript
Each package compiles with `tsc` (configured via `tsconfig.json` in each package).

---

## Testing

Test scripts are in `bin/`:
```bash
# Run test scripts
bun run bin/greeting_get_bin.ts
bun run bin/greeting_set_bin.ts
bun run bin/rhea_test/rhea_call_test.ts
```

---

## Package Dependencies Overview

- **@sleet-js/ft-methods-const** - FT contract method definitions
- **@sleet-js/ref-exchange-methods-const** - Ref exchange methods
- **@sleet-js/wrap-near-contract-methods-const** - wrapNEAR contract methods
- **@hot-labs/near-connect** - Hot Wallet Connect (web only)
- **near-kit** - Core NEAR protocol client
- **zod** - Runtime type validation
- **dotenv** - Environment variable loading (env only)

---

## Key Concepts

- **web** and **env** both export NEAR client instances configured for their respective environments
- **fun** exports contract functions that work with either client
- Contract IDs are network-aware (mainnet/testnet) via helper exports
- All functions use `near-kit` for contract calls
