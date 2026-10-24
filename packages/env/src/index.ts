// ===========================================
// @near-kit-tool-box/env — backend/server NEAR KIT setup.
//
// The env-driven config reads `NEAR_KIT_NETWORK`, `NEAR_KIT_ACCOUNT_ID`, and
// `NEAR_KIT_PRIVATE_KEY` from the process environment (see
// `.env.example`). `NEAR_KIT_NETWORK` is constrained to `"mainnet"` or
// `"testnet"` — for custom RPC URLs, build a `Near` instance directly.
//
// The `NEAR_KIT_` prefix keeps these vars from colliding with the generic
// `NEAR_*` vars that the `near-kit` library reads on its own.
//
// The per-network contract id resolver helpers and the method-name
// constants live in `@near-kit-tool-box/fun` under
// `lib/const_id/*.ts` and `lib/methods/*.ts`. Resolve contract ids
// yourself at the call site, e.g.
//
//   import { near_kit_env, NEAR_KIT_NETWORK } from "@near-kit-tool-box/env";
//   import { rhea_ammv2_contractid } from "@near-kit-tool-box/fun";
//   const id = rhea_ammv2_contractid(NEAR_KIT_NETWORK);
// ===========================================

// env-driven config
export {
  near_kit_env,
  NEAR_KIT_NETWORK,
  NEAR_KIT_ACCOUNT_ID,
  NEAR_KIT_PRIVATE_KEY,
} from "./new-env";
// ===========================================
// copyright 2026 by sleet.near
