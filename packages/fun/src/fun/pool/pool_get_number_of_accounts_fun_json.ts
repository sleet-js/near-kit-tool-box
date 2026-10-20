// =================================================
// pool_get_number_of_accounts_fun_json
//
// View: `get_number_of_accounts`. Returns the total number of staking
// accounts on the pool contract as a JSON `number`.
import type { Near } from "near-kit";
import { pool_methods_const } from "../../lib/methods/methods_pool";
// =================================================
export async function pool_get_number_of_accounts_fun_json(
  near: Near,
  pool_contractId: string,
): Promise<number> {
  const result = await near.view(
    pool_contractId,
    pool_methods_const.get_number_of_accounts,
  );
  return result as number;
}
// =================================================
// copyright 2026 by sleet.near
