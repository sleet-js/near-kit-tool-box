# @near-kit-tool-box/env

Backend/environment NEAR KIT client setup with `.env` file support.

## Installation

```bash
npm install @near-kit-tool-box/env
bun add @near-kit-tool-box/env
```

## Usage

```js
import {
  near_kit_env,
  NEAR_NETWORK,
  NEAR_ACCOUNT_ID,
  NEAR_PRIVATE_KEY,
} from "@near-kit-tool-box/env";
```

## Environment Setup

Create a `.env` file:

```env
export NEAR_NETWORK=testnet
# export NEAR_NETWORK=mainnet

export NEAR_ACCOUNT_ID=your-account.near
export NEAR_PRIVATE_KEY=ed25519:your-private-key
```

## Features

- Environment variable configuration (env var names match the rust crate's `NEAR_*` convention)
- Backend/script-friendly NEAR KIT client
- `NEAR_NETWORK` is constrained to `"mainnet"` or `"testnet"` — for custom RPC URLs, build a `Near` instance directly

copyright 2026 by sleet.near
