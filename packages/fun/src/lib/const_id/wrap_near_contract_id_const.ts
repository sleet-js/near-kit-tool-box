// =================================================
// Contract id constants for the wrap.near wNEAR contract.
// =================================================
import type {
  CONTRACT_ID_CONST_TYPE,
  NETWORK_ID,
} from "./contract_id_const_type";

// =================================================
export const WRAP_NEAR_CONTRACT_ID_CONST: CONTRACT_ID_CONST_TYPE = {
  testnet: "wrap.testnet",
  mainnet: "wrap.near",
};

// =================================================
// Returns the wrap.near contract id for the given network.
export function wrap_near_contractid(network: NETWORK_ID): string {
  return WRAP_NEAR_CONTRACT_ID_CONST[network];
}
// =================================================
// copyright 2026 by sleet.near
