import { Near } from "near-kit";
import { ref_exchange_methods_const } from "@sleet-js/ref-exchange-methods-const";
import type {
  ref_args_params_interface,
  ref_swap_action_type,
} from "../../lib/contract_rhea_args";
import type { AmountInput } from "../../types/AmountInput";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// call
// storage_deposit
// swap
// withdraw
// add_simple_pool
// ===========================================
// ref_storage_deposit_function
export async function ref_storage_deposit_function(
  near: Near,
  rhea_contractId: string,
  amount: AmountInput,
) {
  const result = await near.call(
    rhea_contractId,
    ref_exchange_methods_const.storage_deposit,
    {}, // no args
    { attachedDeposit: amount },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// ref_swap_function
export async function ref_swap_function(
  near: Near,
  rhea_contractId: string,
  swap_actions: ref_swap_action_type[],
  referral_id: ref_args_params_interface["referral_id"],
) {
  const result = await near.call(
    rhea_contractId,
    ref_exchange_methods_const.swap,
    {
      actions: swap_actions,
      referral_id: referral_id,
    },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// ref_withdraw_function
export async function ref_withdraw_function(
  near: Near,
  rhea_contractId: string,
  amount: ref_args_params_interface["amount"],
  token_id: ref_args_params_interface["token_id"],
) {
  const result = await near.call(
    rhea_contractId,
    ref_exchange_methods_const.withdraw,
    {
      amount: amount,
      token_id: token_id,
      unregister: false,
      skip_unwrap_near: false,
    },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// ref_add_simple_pool_function
export async function ref_add_simple_pool_function(
  near: Near,
  rhea_contractId: string,
  fee: ref_args_params_interface["fee"],
  tokens: ref_args_params_interface["tokens"],
) {
  const result = await near.call(
    rhea_contractId,
    ref_exchange_methods_const.add_simple_pool,
    { fee: fee, tokens: tokens },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
