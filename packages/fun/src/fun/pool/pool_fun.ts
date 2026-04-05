import { Near } from "near-kit";
import { pool_methods_const } from "@sleet-js/staking-pool-contract-methods-const";
import type { FinalExecutionOutcome } from "near-kit";
// ===========================================
// view
// 
// call
// ping
// ===========================================
export async function ping(
  near: Near,
  pool_contractId: string,
) {
  const result = await near.call(
    pool_contractId,
    pool_methods_const.ping,
    { gas: "30 Tgas" },
  );
  return result as FinalExecutionOutcome;
}
// ===========================================