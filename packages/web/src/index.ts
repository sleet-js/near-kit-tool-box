// ===========================================
// web
// near_kit_client
export {
  near_kit_client,
  near_connect_client,
  getStoredNetworkId,
  NETWORK_STORAGE_KEY,
} from "./new-hot";
// network
export {
  toggleNetwork,
  setNetwork_mainnet,
  setNetwork_testnet,
} from "./network";
// archival
export { near_kit_client_archival } from "./new-archival";
// ===========================================
// utility - contract constants (web versions)
export {
  hello_contractId_for_network_web,
  greeting_contract_methods,
} from "./lib/contract_greeting_const_web";
export {
  rhea_contractId_for_network_web,
  ref_exchange_methods_const,
} from "./lib/contract_rhea_const_web";
export {
  wrap_contractId_for_network_web,
  wrap_near_methods_const,
} from "./lib/contract_near_wrap_const_web";
// ===========================================
// fun (web-compatible functions)
export { greeting_get_greeting_fun } from "./fun/greeting/greeting_get_fun";
export { greeting_set_greeting_fun } from "./fun/greeting/greeting_set_fun";
export {
  ref_get_number_of_pools_function,
  ref_get_deposits_function,
  ref_get_pool_function,
  ref_get_pools_function,
  ref_get_return_function,
  ref_storage_balance_of_function,
} from "./fun/rhea/rhea_view_fun";
export {
  ref_storage_deposit_function,
  ref_swap_function,
  ref_withdraw_function,
  ref_add_simple_pool_function,
} from "./fun/rhea/rhea_call_fun";
export {
  ft_balance_of_fun,
  ft_transfer_fun,
  ft_transfer_call_fun,
  ft_storage_deposit_fun,
} from "./fun/ft/ft_fun";
export {
  wrap_near_deposit_fun,
  wrap_near_withdraw_fun,
} from "./fun/near/wrap_near";
// ===========================================
// types
export type { AmountInput } from "./types/AmountInput";
export type { greeting_args_params_interface } from "./lib/contract_greeting_args";
export type {
  ref_args_params_interface,
  ref_swap_action_type,
  ref_swap_function_args,
} from "./lib/contract_rhea_args";
export type { ft_args_params_interface } from "./lib/contract_ft_args";
// ===========================================
// copyright 2026 by sleet.near
