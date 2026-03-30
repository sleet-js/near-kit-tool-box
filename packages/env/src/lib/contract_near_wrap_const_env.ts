// ===========================================
// env-only version - uses MY_ENV_NEAR_networkId
export { wrap_near_methods_const } from "@sleet-js/wrap-near-contract-methods-const";
import { MY_ENV_NEAR_networkId } from "../new-env";
// ===========================================
const wrap_testnet_contractId_const = "wrap.testnet";
const wrap_mainnet_contractId_const = "wrap.near";
// ===========================================
// env
export const wrap_contractId_for_network_env =
  MY_ENV_NEAR_networkId === "testnet"
    ? wrap_testnet_contractId_const
    : wrap_mainnet_contractId_const;
// ===========================================
