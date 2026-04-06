// ===========================================
// backend
// near_kit_env
export {
  near_kit_env,
  MY_ENV_NEAR_networkId,
  MY_ENV_NEAR_accountId,
  MY_ENV_NEAR_publicKey,
  MY_ENV_NEAR_privateKey,
} from "./new-env";
// ===========================================
// utility - contract constants (env versions)
export {
  hello_contractId_for_network_env,
  greeting_contract_methods,
} from "./lib/contract_greeting_const_env";
export {
  rhea_contractId_for_network_env,
  ref_exchange_methods_const,
} from "./lib/contract_rhea_const_env";
export {
  wrap_contractId_for_network_env,
  wrap_near_methods_const,
} from "./lib/contract_near_wrap_const_env";
export { near_tld_for_network_env } from "./lib/near_tld_const_env";
// ===========================================
// copyright 2026 by sleet.near
