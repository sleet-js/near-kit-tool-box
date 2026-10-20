// =================================================
// Contract id constants for the `near` (mainnet) / `testnet`
// (testnet) TLD registrar / linkdrop contracts. Both contracts share
// the `near-linkdrop` source — only the deploy account differs.
// =================================================
import type {
  CONTRACT_ID_CONST_TYPE,
  NETWORK_ID,
} from "./contract_id_const_type";

// =================================================
export const NEAR_TLD_CONTRACT_ID_CONST: CONTRACT_ID_CONST_TYPE = {
  testnet: "testnet",
  mainnet: "near",
};

// =================================================
// Returns the TLD registrar / linkdrop contract id for the given network.
export function near_tld_contractid(network: NETWORK_ID): string {
  return NEAR_TLD_CONTRACT_ID_CONST[network];
}
// =================================================
// copyright 2026 by sleet.near
