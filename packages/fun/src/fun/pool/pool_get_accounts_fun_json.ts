// =================================================
// pool_get_accounts_fun_json
//
// View: `get_accounts`. Returns the paginated list of accounts on
// the staking pool as raw JSON.
import type { Near } from "near-kit";
import { pool_methods_const } from "../../lib/methods/methods_pool";
// =================================================
export async function pool_get_accounts_fun_json(
  near: Near,
  pool_contractId: string,
  from_index: number,
  limit: number,
): Promise<unknown> {
  const result = await near.view(
    pool_contractId,
    pool_methods_const.get_accounts,
    { from_index, limit },
  );
  return result;
}
// =================================================
// copyright 2026 by sleet.near
