# @near-kit-tool-box

A monorepo containing three packages for NEAR development:

- **@near-kit-tool-box/web** - Browser-specific NEAR KIT client setup with Hot Wallet Connect
- **@near-kit-tool-box/env** - Backend/environment NEAR KIT client setup with .env support
- **@near-kit-tool-box/fun** - Reusable contract functions for common NEAR contracts

## Quick Start

```bash
bun install
bun update --latest
bun run build
```

## Packages

### @near-kit-tool-box/web

Browser client with Hot Wallet Connect and localStorage network switching.

```js
import {
  near_kit_client,
  near_connect_client,
  toggleNetwork,
  setNetwork_mainnet,
  setNetwork_testnet,
  hello_contractId_for_network_web,
  rhea_contractId_for_network_web,
  wrap_contractId_for_network_web,
} from "@near-kit-tool-box/web";
```

### @near-kit-tool-box/env

Backend client with environment variable configuration.

```js
import {
  near_kit_env,
  MY_ENV_NEAR_accountId,
  hello_contractId_for_network_env,
  rhea_contractId_for_network_env,
  wrap_contractId_for_network_env,
} from "@near-kit-tool-box/env";
```

### @near-kit-tool-box/fun

Contract functions (greeting, Rhea/Ref, FT, wrapNEAR).

```js
import {
  // Greeting
  greeting_get_greeting_fun,
  greeting_set_greeting_fun,
  // Rhea/Ref
  ref_get_number_of_pools_function,
  ref_get_pool_function,
  ref_swap_function,
  // FT
  ft_balance_of_fun,
  ft_transfer_fun,
  // wrapNEAR
  wrap_near_deposit_fun,
  wrap_near_withdraw_fun,
  // Types
  AmountInput,
} from "@near-kit-tool-box/fun";
```

## Development

```bash
# Build all packages
bun run build

# Build specific package
bun run build:web
bun run build:env
bun run build:fun

# TypeScript check
cd packages/web && bun run tsc --noEmit
cd packages/env && bun run tsc --noEmit
cd packages/fun && bun run tsc --noEmit
```

## Publishing

Each package is independent and can be published separately:

```bash
# Login to npm
bunx npm login

# Publish individual packages
cd packages/web && bun publish --access public
cd packages/env && bun publish --access public
cd packages/fun && bun publish --access public
```

## Usage Example

```js
// Browser (web + fun)
import { near_kit_client } from "@near-kit-tool-box/web";
import { greeting_get_greeting_fun } from "@near-kit-tool-box/fun";

const near = near_kit_client();
const greeting = await greeting_get_greeting_fun(near, "hello.sleet.near");

// Backend (env + fun)
import { near_kit_env } from "@near-kit-tool-box/env";
import { ft_balance_of_fun } from "@near-kit-tool-box/fun";

const balance = await ft_balance_of_fun(
  near_kit_env,
  "token.near",
  "account.near",
);
```

copyright 2026 by sleet.near
