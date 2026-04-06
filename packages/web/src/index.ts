// ===========================================
// web
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
// utility - contract constants (web versions)
export {
  hello_contractId_for_network_web,
  greeting_contract_methods,
} from "./lib/contract_greeting_const_web";
export {
  rhea_contractId_for_network_web,
  ref_exchange_methods_const,
} from "./lib/contract_rhea_const_web";
export {
  wrap_contractId_for_network_web,
  wrap_near_methods_const,
} from "./lib/contract_near_wrap_const_web";
export { near_tld_for_network_web } from "./lib/near_tld_const_web";
// ===========================================
// copyright 2026 by sleet.near
