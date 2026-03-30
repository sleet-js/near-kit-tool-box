import { Near } from "near-kit";
import { ft_methods_const } from "@sleet-js/ft-methods-const";
import type { ft_args_params_interface } from "../../lib/contract_ft_args";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// view
// ft_balance_of
// call
// ft_transfer
// ft_transfer_call
// storage_deposit
// ===========================================
// ft_balance_of
export async function ft_balance_of_fun(
  near: Near,
  ft_contractId: string,
  account_id: ft_args_params_interface["account_id"],
) {
  const result = await near.view(
    ft_contractId,
    ft_methods_const.ft_balance_of,
    { account_id: account_id },
  );
  return result as string;
}
// ===========================================
// ft_transfer
export async function ft_transfer_fun(
  near: Near,
  ft_contractId: string,
  receiver_id: ft_args_params_interface["receiver_id"],
  amount: ft_args_params_interface["amount"],
) {
  const result = await near.call(
    ft_contractId,
    ft_methods_const.ft_transfer,
    { amount: amount, receiver_id: receiver_id },
    { attachedDeposit: "0.000000000000000000000001 NEAR" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// ft_transfer_call
export async function ft_transfer_call_fun(
  near: Near,
  ft_contractId: string,
  receiver_id: ft_args_params_interface["receiver_id"],
  msg: ft_args_params_interface["msg"],
  amount: ft_args_params_interface["amount"],
) {
  const result = await near.call(
    ft_contractId,
    ft_methods_const.ft_transfer_call,
    { msg: msg, amount: amount, receiver_id: receiver_id },
    { attachedDeposit: "0.000000000000000000000001 NEAR", gas: "50 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// storage_deposit
export async function ft_storage_deposit_fun(
  near: Near,
  ft_contractId: string,
) {
  const result = await near.call(
    ft_contractId,
    ft_methods_const.storage_deposit,
    {},
    { attachedDeposit: "0.00125 NEAR" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
