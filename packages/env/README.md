# @near-kit-tool-box/env

Backend/environment NEAR client setup with `.env` file support.

## Installation

```bash
npm install @near-kit-tool-box/env
bun add @near-kit-tool-box/env
```

## Usage

```js
import {
  near_kit_env,
  MY_ENV_NEAR_accountId,
  MY_ENV_NEAR_privateKey,
} from "@near-kit-tool-box/env";
```

## Environment Setup

Create a `.env` file:

```env
# networkId
export env_networkId=testnet
# export env_networkId=mainnet

# auth
export env_accountId=your-account.near
export env_publicKey=ed25519:your-public-key
export env_privateKey=ed25519:your-private-key
```

## Features

- Environment variable configuration
- Backend/script-friendly NEAR client
- Contract constants for env environment

copyright 2026 by sleet.near
