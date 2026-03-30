// ===========================================
// env-only version - uses MY_ENV_NEAR_networkId
import { MY_ENV_NEAR_networkId } from "../new-env";
// ===========================================
const hello_testnet_contractId_const = "hello.sleet.testnet";
const hello_mainnet_contractId_const = "hello.sleet.near";
// ===========================================
// env
export const hello_contractId_for_network_env =
  MY_ENV_NEAR_networkId === "testnet"
    ? "hello.sleet.testnet"
    : "hello.sleet.near";
// ===========================================
// contact methods
export const greeting_contract_methods = {
  get_greeting: "get_greeting",
  set_greeting: "set_greeting",
};
// ===========================================
