// =================================================
// Contract id constants for the greeting smart contract.
// =================================================
import type {
  CONTRACT_ID_CONST_TYPE,
  NETWORK_ID,
} from "./contract_id_const_type";

// =================================================
export const GREETING_CONTRACT_ID_CONST: CONTRACT_ID_CONST_TYPE = {
  testnet: "hello.sleet.testnet",
  mainnet: "hello.sleet.near",
};

// =================================================
// Returns the greeting contract id for the given network.
export function greeting_contractid(network: NETWORK_ID): string {
  return GREETING_CONTRACT_ID_CONST[network];
}
// =================================================
// copyright 2026 by sleet.near
