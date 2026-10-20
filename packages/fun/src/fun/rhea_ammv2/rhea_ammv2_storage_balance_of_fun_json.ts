// =================================================
// rhea_ammv2_storage_balance_of_fun_json
//
// View: `storage_balance_of`. Returns the NEP-145 storage balance for
// `account_id` as raw JSON. (Shape: `{ total, available }` — see
// `STORAGE_BALANCE_OF_RESPONSE_TYPE`.)
import type { Near } from "near-kit";
import { rhea_ammv2_methods_const } from "../../lib/methods/methods_rhea_ammv2";
import type { rhea_ammv2_args } from "../../lib/args/rhea_ammv2_args";
// =================================================
export async function rhea_ammv2_storage_balance_of_fun_json(
  near: Near,
  rhea_ammv2_contractId: string,
  account_id: rhea_ammv2_args["account_id"],
): Promise<unknown> {
  const result = await near.view(
    rhea_ammv2_contractId,
    rhea_ammv2_methods_const.storage_balance_of,
    { account_id },
  );
  return result;
}
// =================================================
// copyright 2026 by sleet.near
