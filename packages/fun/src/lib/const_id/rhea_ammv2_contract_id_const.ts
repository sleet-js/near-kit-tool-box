// =================================================
// Contract id constants for the rhea_ammv2 contract.
// =================================================
import type {
  CONTRACT_ID_CONST_TYPE,
  NETWORK_ID,
} from "./contract_id_const_type";

// =================================================
export const RHEA_AMMV2_CONTRACT_ID_CONST: CONTRACT_ID_CONST_TYPE = {
  testnet: "ref-finance-101.testnet",
  mainnet: "v2.ref-finance.near",
};

// =================================================
// Returns the rhea_ammv2 contract id for the given network.
export function rhea_ammv2_contractid(network: NETWORK_ID): string {
  return RHEA_AMMV2_CONTRACT_ID_CONST[network];
}
// =================================================
// copyright 2026 by sleet.near
