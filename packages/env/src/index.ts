// ===========================================
// @near-kit-tool-box/env — backend/server NEAR KIT setup.
//
// The per-network contract id resolver helpers and the method-name
// constants now live in `@near-kit-tool-box/fun` under
// `lib/const_id/*.ts` and `lib/methods/*.ts`. Resolve contract ids
// yourself at the call site, e.g.
//
//   import { MY_ENV_NEAR_networkId } from "@near-kit-tool-box/env";
//   import { rhea_ammv2_contractid } from "@near-kit-tool-box/fun";
//   const id = rhea_ammv2_contractid(MY_ENV_NEAR_networkId as "mainnet" | "testnet");
// ===========================================

// near_kit_env
export {
  near_kit_env,
  MY_ENV_NEAR_networkId,
  MY_ENV_NEAR_accountId,
  MY_ENV_NEAR_publicKey,
  MY_ENV_NEAR_privateKey,
} from "./new-env";
// ===========================================
// copyright 2026 by sleet.near
