import { Near } from "near-kit";
import { pool_methods_const } from "@sleet-js/staking-pool-contract-methods-const";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// view
// get_number_of_accounts
// call
// ping
// ===========================================
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
export async function pool_ping_fun(near: Near, pool_contractId: string) {
  const result = await near.call(pool_contractId, pool_methods_const.ping, {
    gas: "30 Tgas",
  });
  return result as FinalExecutionOutcome;
}
// ===========================================
