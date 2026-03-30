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
// ===========================================
// re-export all from @near-kit-tool-box/fun
export {
  greeting_get_greeting_fun,
  greeting_set_greeting_fun,
  ref_get_number_of_pools_function,
  ref_get_deposits_function,
  ref_get_pool_function,
  ref_get_pools_function,
  ref_get_return_function,
  ref_storage_balance_of_function,
  ref_storage_deposit_function,
  ref_swap_function,
  ref_withdraw_function,
  ref_add_simple_pool_function,
  ft_balance_of_fun,
  ft_transfer_fun,
  ft_transfer_call_fun,
  ft_storage_deposit_fun,
  wrap_near_deposit_fun,
  wrap_near_withdraw_fun,
} from "@near-kit-tool-box/fun";
// ===========================================
// re-export types from @near-kit-tool-box/fun
export type {
  AmountInput,
  greeting_args_params_interface,
  ref_args_params_interface,
  ref_swap_action_type,
  ref_swap_function_args,
  ft_args_params_interface,
} from "@near-kit-tool-box/fun";
// ===========================================
// copyright 2026 by sleet.near
