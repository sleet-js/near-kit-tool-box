// =================================================
// rhea_ammv2_get_pools_fun_json
//
// View: `get_pools`. Returns a paginated list of pool descriptors as
// raw JSON.
import type { Near } from "near-kit";
import { rhea_ammv2_methods_const } from "../../lib/methods/methods_rhea_ammv2";
import type { rhea_ammv2_args } from "../../lib/args/rhea_ammv2_args";
// =================================================
export async function rhea_ammv2_get_pools_fun_json(
  near: Near,
  rhea_ammv2_contractId: string,
  from_index: rhea_ammv2_args["from_index"],
  limit: rhea_ammv2_args["limit"],
): Promise<unknown> {
  const result = await near.view(
    rhea_ammv2_contractId,
    rhea_ammv2_methods_const.get_pools,
    { from_index, limit },
  );
  return result;
}
// =================================================
// copyright 2026 by sleet.near
