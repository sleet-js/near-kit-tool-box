// =================================================
// rhea_ammv2_get_deposits_fun_json
//
// View: `get_deposits`. Returns the per-token deposited balances
// (`{ token_id: balance_string }`) for `accountId` as raw JSON.
import type { Near } from "near-kit";
import { rhea_ammv2_methods_const } from "../../lib/methods/methods_rhea_ammv2";
import type { rhea_ammv2_args } from "../../lib/args/rhea_ammv2_args";
// =================================================
export async function rhea_ammv2_get_deposits_fun_json(
  near: Near,
  rhea_ammv2_contractId: string,
  account_id: rhea_ammv2_args["account_id"],
): Promise<unknown> {
  const result = await near.view(
    rhea_ammv2_contractId,
    rhea_ammv2_methods_const.get_deposits,
    { account_id },
  );
  return result;
}
// =================================================
// copyright 2026 by sleet.near
