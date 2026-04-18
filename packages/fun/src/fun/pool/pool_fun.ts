import { Near } from "near-kit";
import { pool_methods_const } from "@sleet-js/staking-pool-contract-methods-const";
import type { FinalExecutionOutcome } from "near-kit";
import type { POOL_GET_ACCOUNTS_ACCOUNTS_TYPE } from "../../types/pool_types";
import type { AmountInput } from "@near-kit-tool-box/fun";
// ===========================================
// view
// get_number_of_accounts
// get_accounts
// call
// ping
// deposit_and_stake
// ===========================================
// get_number_of_accounts
export async function pool_get_number_of_accounts_fun(
  near: Near,
  pool_contractId: string,
) {
  const result = await near.view(
    pool_contractId,
    pool_methods_const.get_number_of_accounts,
  );
  return result as number;
}
// ===========================================
// get_accounts
export async function pool_get_accounts_fun(
  near: Near,
  pool_contractId: string,
  from_index: number,
  limit: number,
) {
  const result = await near.view(
    pool_contractId,
    pool_methods_const.get_accounts,
    { from_index: from_index, limit: limit },
  );
  return result as POOL_GET_ACCOUNTS_ACCOUNTS_TYPE;
}
// ===========================================
// deposit_and_stake
export async function pool_deposit_and_stake_fun(
  near: Near,
  pool_contractId: string,
  attachedDeposit: AmountInput,
) {
  const result = await near.call(
    pool_contractId,
    pool_methods_const.deposit_and_stake,
    {},
    { attachedDeposit: attachedDeposit },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================
// pool_ping_fun
export async function pool_ping_fun(near: Near, pool_contractId: string) {
  const result = await near.call(pool_contractId, pool_methods_const.ping, {
    gas: "30 Tgas",
  });
  return result as FinalExecutionOutcome;
}
// ===========================================
