// ===========================================
// env-only version - uses MY_ENV_NEAR_networkId
export { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import {
  ref_mainnet_contractId_const,
  ref_testnet_contractId_const,
} from "@sleet-js/ref-exchange-methods-const";
import { MY_ENV_NEAR_networkId } from "../new-env";
// ===========================================
// env
export const rhea_contractId_for_network_env =
  MY_ENV_NEAR_networkId === "testnet"
    ? ref_testnet_contractId_const
    : ref_mainnet_contractId_const;
// ===========================================
