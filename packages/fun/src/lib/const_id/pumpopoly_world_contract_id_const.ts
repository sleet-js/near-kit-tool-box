// =================================================
// Contract id constants for the pumpopoly world game contract.
// =================================================
import type { CONTRACT_ID_CONST_TYPE, NETWORK_ID } from "./contract_id_const_type";

// =================================================
export const PUMPOPOLY_WORLD_CONTRACT_ID_CONST: CONTRACT_ID_CONST_TYPE = {
  testnet: "world.pumpopoly.testnet",
  mainnet: "world.pumpopoly.near",
};

// =================================================
// Returns the pumpopoly world contract id for the given network.
export function pumpopoly_world_contractid(network: NETWORK_ID): string {
  return PUMPOPOLY_WORLD_CONTRACT_ID_CONST[network];
}
// =================================================
// copyright 2026 by sleet.near
