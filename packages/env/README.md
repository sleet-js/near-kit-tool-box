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
  NEAR_KIT_NETWORK,
  NEAR_KIT_ACCOUNT_ID,
  NEAR_KIT_PRIVATE_KEY,
} from "@near-kit-tool-box/env";
```

## Environment Setup

Create a `.env` file:

```env
export NEAR_KIT_NETWORK=testnet
# export NEAR_KIT_NETWORK=mainnet

export NEAR_KIT_ACCOUNT_ID=your-account.near
export NEAR_KIT_PRIVATE_KEY=ed25519:your-private-key
```

The `export` prefix is optional — dotenv parses both forms.

## Features

- Environment variable configuration (upper-snake `NEAR_KIT_*` env vars)
- Backend/script-friendly NEAR KIT client
- `NEAR_KIT_NETWORK` is constrained to `"mainnet"` or `"testnet"` — for custom RPC URLs, build a `Near` instance directly
- The `NEAR_KIT_` prefix avoids colliding with the generic `NEAR_*` env vars read by the `near-kit` library itself

copyright 2026 by sleet.near
