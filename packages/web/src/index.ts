// ===========================================
// @near-kit-tool-box/web — browser NEAR KIT setup.
//
// The per-network contract id resolver helpers and the method-name
// constants now live in `@near-kit-tool-box/fun` under
// `lib/const_id/*.ts` and `lib/methods/*.ts`. Resolve contract ids
// yourself at the call site, e.g.
//
//   import { getStoredNetworkId } from "@near-kit-tool-box/web";
//   import { rhea_ammv2_contractid } from "@near-kit-tool-box/fun";
//   const id = rhea_ammv2_contractid(getStoredNetworkId());
// ===========================================

// near_kit_client
export {
  near_kit_client,
  near_connect_client,
  getStoredNetworkId,
  NETWORK_STORAGE_KEY,
} from "./new-hot";
// network
export {
  toggleNetwork,
  setNetwork_mainnet,
  setNetwork_testnet,
} from "./network";
// archival
export { near_kit_client_archival } from "./new-archival";
// ===========================================
// copyright 2026 by sleet.near
