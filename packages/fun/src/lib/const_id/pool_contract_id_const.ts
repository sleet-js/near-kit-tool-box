// =================================================
// Contract id constants for the NEAR staking-pool factory contracts.
// =================================================
import type { CONTRACT_ID_CONST_TYPE, NETWORK_ID } from "./contract_id_const_type";

// =================================================
export const POOL_CONTRACT_ID_CONST: CONTRACT_ID_CONST_TYPE = {
  testnet: "pool.f863607.m0e2.testnet",
  mainnet: "pool.near",
};

// =================================================
// Returns the staking-pool factory contract id for the given network.
export function pool_contractid(network: NETWORK_ID): string {
  return POOL_CONTRACT_ID_CONST[network];
}
// =================================================
// copyright 2026 by sleet.near
