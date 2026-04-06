// ===========================================
// env-only version - uses MY_ENV_NEAR_networkId
import { MY_ENV_NEAR_networkId } from "../new-env";
// ===========================================
const near_testnet_tld = "testnet";
const near_mainnet_tld = "near";
// ===========================================
// env
export const near_tld_for_network_env =
  MY_ENV_NEAR_networkId === "testnet"
    ? near_testnet_tld
    : near_mainnet_tld;
// ===========================================
